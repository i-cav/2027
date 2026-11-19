---
layout: page
title: Mentoring Workshop
permalink: /mentoring-workshop/
topic: program
---

{% assign workshop = site.data.program.events | where: 'id', 'vmw' | first %}
<p class="lead-copy">{% include program-date.html event=workshop %}</p>

<p>{{ workshop.description | escape }}</p>

## Contact

{% assign workshop_chairs = site.data.organizers.roles | where: 'title', 'Mentoring Workshop Chairs' %}

{% include organizer-grid.html roles=workshop_chairs featured=true featured_title="Workshop Chairs" heading_level=3 show_email=true %}
