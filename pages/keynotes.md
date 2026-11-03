---
layout: page
title: Keynotes
permalink: /keynotes/
topic: program
share-description: Meet CAV 2027 keynote speakers Anne-Kathrin Schmuck, Dino Distefano, and Marijn Heule.
cover-img: "/assets/img/hero/amsterdam-canal-houses.jpg"
---

CAV 2027 welcomes Anne-Kathrin Schmuck, Dino Distefano, and Marijn Heule as keynote speakers in Amsterdam.

<div class="keynote-grid">
{% for speaker in site.data.keynotes %}
  <section class="keynote-speaker" id="{{ speaker.id }}" aria-labelledby="{{ speaker.id }}-name">
    <div>
      {% if speaker.photo %}
      <a href="{{ speaker.url }}" aria-label="{{ speaker.name | escape }}">
        <img class="keynote-speaker__photo" src="{{ speaker.photo | relative_url }}" alt="" width="240" height="280" decoding="async">
      </a>
      {% else %}
      <div class="keynote-speaker__photo keynote-speaker__photo--placeholder" aria-hidden="true"></div>
      {% endif %}
      {% if speaker.photo_credit %}
      <p class="keynote-speaker__photo-credit">Photo: &copy; {{ speaker.photo_credit | escape }}</p>
      {% endif %}
    </div>
    <div>
      <h2 id="{{ speaker.id }}-name"><a href="{{ speaker.url }}">{{ speaker.name }}</a></h2>
      {% if speaker.affiliation %}
      <p class="keynote-speaker__affiliation">{{ speaker.affiliation }}</p>
      {% endif %}
      {% if speaker.teaser %}
      <p>{{ speaker.teaser }}</p>
      {% else %}
      <p>Talk details to be announced.</p>
      {% endif %}
    </div>
  </section>
{% endfor %}
</div>
