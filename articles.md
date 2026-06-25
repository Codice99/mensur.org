---
layout: page
title: Articles
permalink: /articles/
---

Long-form essays, research articles and structured reflections connected with Mensur and the Weissmann–Greiffenberg Institute Project.

Topics include lineage, nobility, aristocratic memory, genealogy, symbolism, Mesmerism, Western esotericism, European history and intellectual history.

<ul class="post-list">
{% for post in site.posts %}
 <li>
 <a href="{{ post.url }}">{{ post.title }}</a>
 <p class="post-meta">{{ post.date | date: "%d %B %Y" }} · {{ post.categories | join: ", " }}</p>
 <p>{{ post.excerpt | strip_html | truncate: 260 }}</p>
 </li>
{% endfor %}
</ul>
