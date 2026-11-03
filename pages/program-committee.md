---
layout: page
title: Program Committee
permalink: /program-committee/
topic: organization
share-description: CAV 2027 program committee, PC chairs, and area chairs.
---

{% assign pc_chairs = site.data.organizers.roles | where: "title", "General Chairs + PC Chairs" %}
{% include organizer-grid.html roles=pc_chairs featured_title="PC Chairs" %}

<section aria-labelledby="area-chairs">
  <h2 class="organizer-role__title" id="area-chairs">Area Chairs</h2>
  <ul class="organizer-list committee-grid">
  {% for person in site.data.program_committee.area_chairs %}
    {% include organizer-person.html person=person %}
  {% endfor %}
  </ul>
</section>

<section class="committee-members" aria-labelledby="pc-members">
  <h2 class="organizer-role__title" id="pc-members">PC Members</h2>
  {% if site.data.program_committee.members.size > 0 %}
  <ul class="committee-member-list">
  {% for person in site.data.program_committee.members %}
    <li>
      {% if person.url %}
      <a class="committee-member-list__name" href="{{ person.url | escape }}">{{ person.name | escape }}</a>
      {% else %}
      <span class="committee-member-list__name">{{ person.name | escape }}</span>
      {% endif %}
      <span class="committee-member-list__affiliation">{{ person.affiliation | escape }}</span>
    </li>
  {% endfor %}
  </ul>
  {% else %}
  <p>The full program committee will be announced here.</p>
  {% endif %}
</section>

<nav class="page-related-links" aria-label="Related committee pages">
  <span class="page-related-links__label">See also:</span>
  <ul class="page-related-links__list" role="list">
    <li class="page-related-links__item"><a href="{{ '/organizing-committee/' | relative_url }}">Organizing Committee</a></li>
  </ul>
</nav>
