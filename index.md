---
layout: default
title: Home
---

# Mensur

**A research archive on lineage, law and European memory.**

Mensur is a personal research archive dedicated to genealogy, European historical memory, energy law, symbolism and intellectual history.

The project begins with the Weissmann and Greiffenberg lines, but expands into broader fields: Central Europe, the Mediterranean, the Nordic world, Eastern Slavic and Eurasian spaces, and European energy regulation.

## Core Areas

<span class="badge">Mediterranean–Levantine</span>
<span class="badge">Germanic–Alpine</span>
<span class="badge">Nordic–Arctic</span>
<span class="badge">Eastern Slavic–Eurasian</span>
<span class="badge">Energy Law & Hydrogen Regulation</span>
<span class="badge">Symbolism & Intellectual History</span>

## Latest Articles

<ul class="post-list">
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <p class="post-meta">{{ post.date | date: "%d %B %Y" }} · {{ post.categories | join: ", " }}</p>
    <p>{{ post.excerpt | strip_html | truncate: 220 }}</p>
  </li>
{% endfor %}
</ul>
