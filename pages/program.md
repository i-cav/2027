---
layout: page
title: Program Overview
permalink: /program/
topic: program
wide: true
share-description: Explore the CAV 2027 conference week and workshops, July 19–23 in Amsterdam.
cover-img: "/assets/img/hero/zaanse-windmills.jpg"
---

<p class="lead-copy">Workshops open the CAV 2027 conference week on 19–20 July, followed by the main conference on 21–23 July in Amsterdam.</p>

{% assign workshops = site.data.program.events | where: 'kind', 'workshop' | sort_natural: 'acronym' %}

<section class="program-calendar" aria-labelledby="conference-week-heading">
  <div class="program-calendar__heading">
    <h2 id="conference-week-heading">Conference Week</h2>
    <p>19–23 July 2027</p>
  </div>
  <p class="program-calendar__note">See the individual workshop websites for their programs.</p>
  <div class="program-calendar__week">
    {% for day in site.data.program.days %}
    <section class="program-calendar__day" aria-labelledby="day-{{ day.date }}">
      <h3 id="day-{{ day.date }}" class="program-calendar__date">
        <time datetime="{{ day.date }}"><span>{{ day.date | date: '%A' }}</span><strong>{{ day.date | date: '%-d July' }}</strong></time>
      </h3>
      <ul class="program-calendar__events" role="list">
        {% for event in workshops %}
        {% if day.date >= event.start and day.date < event.end %}
        {% assign last_workshop_date = event.end | date: '%s' | minus: 86400 | date: '%Y-%m-%d' %}
        <li class="program-calendar__item">
          <a class="program-calendar__event program-calendar__event--workshop{% if event.start != last_workshop_date %} program-calendar__event--multiday{% endif %}" href="{% if event.url %}{{ event.url | escape }}{% else %}#{{ event.id }}{% endif %}"{% unless event.url %} data-turbo="false"{% endunless %}>
            <strong>{{ event.acronym | escape }}{% if event.url %} <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>{% endif %}</strong>
            <span>{{ event.title | remove_first: 'Workshop on ' | remove_first: ' Workshop' | escape }}</span>
            {% if event.start != last_workshop_date %}<small>Also on {% if day.date == event.start %}{{ last_workshop_date | date: '%A' }}{% else %}{{ event.start | date: '%A' }}{% endif %}</small>{% endif %}
          </a>
        </li>
        {% endif %}
        {% endfor %}
        {% for event in site.data.program.events %}
        {% if event.kind != 'workshop' and day.date >= event.start and day.date < event.end %}
        <li class="program-calendar__item">
          <a class="program-calendar__event program-calendar__event--{{ event.kind }}" href="#{{ event.id }}" data-turbo="false">{{ event.title | escape }}</a>
        </li>
        {% endif %}
        {% endfor %}
      </ul>
    </section>
    {% endfor %}
  </div>
</section>

<section class="program-workshops" aria-labelledby="workshops-heading">
  <h2 id="workshops-heading">Workshops</h2>
  {% for day in site.data.program.days %}
  {% assign starting_workshops = workshops | where: 'start', day.date %}
  {% if starting_workshops.size > 0 %}
  <section class="workshop-day" aria-labelledby="workshops-{{ day.date }}">
    <h3 id="workshops-{{ day.date }}">{{ day.date | date: '%A, %-d July' }}</h3>
    <div class="workshop-list">
      {% for event in starting_workshops %}
      <article class="workshop-detail" aria-labelledby="{{ event.id }}">
        <p class="workshop-detail__date">{% include program-date.html event=event %}</p>
        <h4 id="{{ event.id }}">{{ event.acronym | escape }}</h4>
        <p class="workshop-detail__title">{{ event.title | escape }}</p>
        {% if event.description %}
        <p>{{ event.description | escape }}</p>
        {% endif %}
        {% if event.organizers %}
        <p class="workshop-detail__organizers"><strong>Organizers:</strong> {{ event.organizers | join: ', ' | escape }}</p>
        {% endif %}
        {% if event.url %}
        <a class="button-link workshop-detail__website" href="{{ event.url | escape }}">{{ event.acronym | escape }} website <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
        {% else %}
        <p class="workshop-detail__note">Website to be announced.</p>
        {% endif %}
      </article>
      {% endfor %}
    </div>
  </section>
  {% endif %}
  {% endfor %}
</section>

<section id="main-conference" class="program-overview" aria-labelledby="main-conference-heading">
  <h2 id="main-conference-heading">Main Conference</h2>
  <p>The detailed program for 21–23 July will be announced here as it becomes available.</p>
  <p>Our three keynote speakers have been announced; meet them on the <a href="{{ '/keynotes/' | relative_url }}">keynotes page</a>.</p>
</section>

{% assign industry_day = site.data.program.events | where: 'id', 'industry-day' | first %}
<section id="industry-day" class="program-overview" aria-labelledby="industry-day-heading">
  <h2 id="industry-day-heading">Industry Day</h2>
  <p>{% include program-date.html event=industry_day %}</p>
  <p>{{ industry_day.description | escape }}</p>
</section>

<section class="program-overview" aria-labelledby="social-program-heading">
  <h2 id="social-program-heading">Social Program</h2>
  <p>Further social event details will be announced here as they become available.</p>
  <dl class="program-overview__list">
    {% assign social_events = site.data.program.events | where: 'kind', 'social' %}
    {% for event in social_events %}
    <div id="{{ event.id }}">
      <dt>{{ event.title | escape }}</dt>
      <dd>{% include program-date.html event=event %}</dd>
    </div>
    {% endfor %}
  </dl>
</section>

<nav class="page-related-links" aria-label="Program pages">
  <span class="page-related-links__label">See also:</span>
  <ul class="page-related-links__list" role="list">
    <li class="page-related-links__item"><a href="{{ '/keynotes/' | relative_url }}">Keynotes</a></li>
    <li class="page-related-links__item"><a href="{{ '/accepted/' | relative_url }}">Accepted Papers</a></li>
    <li class="page-related-links__item"><a href="{{ '/program-committee/' | relative_url }}">Program Committee</a></li>
  </ul>
</nav>
