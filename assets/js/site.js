// Modules expose page lifecycle hooks; global listeners dispatch the hooks below.
const BootstrapTooltips = {
  afterLoad() {
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((trigger) => {
      window.bootstrap.Tooltip.getOrCreateInstance(trigger);
    });
  },

  beforeCache() {
    // Bootstrap appends transient DOM; dispose it before Turbo stores the page snapshot.
    document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((trigger) => {
      window.bootstrap.Tooltip.getInstance(trigger)?.dispose();
    });
  }
};

const DeadlinePopovers = {
  afterLoad() {
    // AoE deadline controls keep the canonical UTC instant in markup; the popover formats it locally.
    const triggers = Array.from(document.querySelectorAll("[data-local-deadline]"));
    if (!triggers.length) return;

    triggers.forEach((trigger) => {
      const deadlineUtc = trigger.getAttribute("data-deadline-utc");
      const originalDeadline = trigger.getAttribute("data-original-deadline") || trigger.textContent.trim();
      if (!deadlineUtc) return;

      const deadline = new Date(deadlineUtc);
      if (Number.isNaN(deadline.getTime())) return;

      const formatter = new Intl.DateTimeFormat(undefined, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZoneName: "short"
      });
      const localDeadline = formatter.format(deadline);

      // Keep the local deadline available to assistive tech without requiring the popover to open.
      trigger.setAttribute("aria-label", `${originalDeadline}. Your local time: ${localDeadline}.`);

      window.bootstrap.Popover.getOrCreateInstance(trigger, {
        container: "body",
        content: localDeadline,
        customClass: "deadline-date-popover",
        placement: "top",
        title: "Your local time",
        // Hover covers desktop discovery; click covers pinned and touch interaction.
        trigger: "hover click"
      });
    });
  },

  beforeCache() {
    // Avoid caching open popovers or stale Bootstrap instances across Turbo visits.
    document.querySelectorAll("[data-local-deadline]").forEach((trigger) => {
      window.bootstrap.Popover.getInstance(trigger)?.dispose();
    });
  }
};

const BootstrapNavState = {
  beforeCache() {
    // Turbo is leaving this page; skip the collapse animation and cache stable closed markup.
    document.querySelectorAll(".navbar-custom .navbar-collapse.show, .navbar-custom .navbar-collapse.collapsing").forEach((collapse) => {
      collapse.classList.remove("show", "collapsing");
      collapse.classList.add("collapse");
      collapse.style.height = "";
    });

    document.querySelectorAll(".navbar-custom .navbar-toggler[aria-expanded='true']").forEach((toggle) => {
      toggle.classList.add("collapsed");
      toggle.setAttribute("aria-expanded", "false");
    });

    document.querySelectorAll(".navbar-custom .dropdown-toggle.show").forEach((toggle) => {
      window.bootstrap.Dropdown.getInstance(toggle)?.hide();
    });
  }
};

const HeadingPermalinks = {
  afterLoad() {
    document.querySelectorAll(".intro-header h1, .page-content-card :is(h1, h2, h3, h4, h5, h6)[id]").forEach((heading) => {
      // Both initial load events and Turbo's cached pages can contain these links already.
      if (heading.querySelector(".heading-permalink")) return;

      const isPageTitle = heading.matches(".intro-header h1");
      const destination = isPageTitle ? "page" : "section";
      const link = document.createElement("a");
      link.className = "heading-permalink";
      link.href = isPageTitle ? window.location.href.split("#")[0] : `#${encodeURIComponent(heading.id)}`;
      if (!isPageTitle) link.setAttribute("data-turbo", "false");
      link.title = `Link to this ${destination}`;

      // Preserve any existing controls instead of nesting them inside another link.
      if (heading.querySelector("a, button, input, select, textarea")) {
        link.setAttribute("aria-label", `Link to ${destination}: ${heading.textContent.trim()}`);
      } else {
        link.append(...heading.childNodes);
      }

      const indicator = document.createElement("span");
      indicator.className = "heading-permalink__indicator";
      indicator.setAttribute("aria-hidden", "true");
      indicator.textContent = "\u00a0#";
      link.append(indicator);
      heading.append(link);
    });
    this.updateCurrent();
  },

  updateCurrent() {
    // Turbo changes the URL with the History API, which does not update CSS :target.
    document.querySelectorAll(".heading-permalink").forEach((link) => {
      if (link.hash && link.hash === window.location.hash) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  }
};

const afterLoad = () => {
  HeadingPermalinks.afterLoad();
  DeadlinePopovers.afterLoad();
  BootstrapTooltips.afterLoad();
};

const beforeCache = () => {
  DeadlinePopovers.beforeCache();
  BootstrapTooltips.beforeCache();
  BootstrapNavState.beforeCache();
};

document.addEventListener("DOMContentLoaded", afterLoad);
// Finalize heading layout before Turbo captures the incoming page transition.
document.addEventListener("turbo:render", () => HeadingPermalinks.afterLoad());
document.addEventListener("turbo:load", afterLoad);
document.addEventListener("turbo:before-cache", beforeCache);
window.addEventListener("hashchange", () => HeadingPermalinks.updateCurrent());
