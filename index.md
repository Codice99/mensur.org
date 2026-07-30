---
layout: default
title: Home
---

<section class="hero">
 <div class="hero-content">
 <p class="eyebrow">Weissmann–Greiffenberg Institute Project</p>
 <h1>Mensur</h1>
 <p class="hero-subtitle">
 Lineage, nobility, identity, symbolism and European legal thought.
 </p>
 <p class="hero-text">
 Mensur is an institutional and intellectual project devoted to noble memory, aristocratic history, genealogy, Western esotericism, European identity, legal thought and contemporary symbolic and esoteric studies.
 </p>
 <div class="hero-actions">
 <a class="button primary" href="/project/">The Project</a>
 <a class="button secondary" href="/about/">About</a>
 </div>
 </div>
</section>

<section class="clean-home-section">
 <div class="container-wide">
 <div class="clean-intro">
 <p class="clean-kicker">Institute Project</p>
 <h2 class="clean-home-title">The Weissmann–Greiffenberg horizon</h2>
 <p class="clean-home-intro">
 Mensur brings together lineage, nobility, aristocratic memory, genealogy, symbolism, European historical consciousness and symbolic, esoteric and intellectual-historical research.
 </p>
 </div>

 <div class="clean-feature-grid">
 <article class="clean-feature-card">
 <p class="clean-card-kicker">Central Europe</p>
 <h3>Weissmann & Greiffenberg</h3>
 <p>
 Two noble family traditions rooted in Prussia, Germany, Austria and the Alpine–Northern Italian world.
 </p>
 </article>

 <article class="clean-feature-card">
 <p class="clean-card-kicker">Lineage</p>
 <h3>Lineage & Nobility</h3>
 <p>
 Genealogy, aristocratic memory, noble traditions, family history and the reconstruction of European lineages.
 </p>
 </article>

 <article class="clean-feature-card">
 <p class="clean-card-kicker">Identity</p>
 <h3> Aristocratic Memory</h3>
 <p>
 historical memory, identity, memory and the cultural intersections between and European aristocratic worlds.
 </p>
 </article>

 <article class="clean-feature-card">
 <p class="clean-card-kicker">Symbolism</p>
 <h3>Symbolism & Esotericism</h3>
 <p>
 Western esotericism, heraldry, symbolic systems, ritual forms, myth, memory and intellectual history.
 </p>
 </article>

 <article class="clean-feature-card">
 <p class="clean-card-kicker">Mesmerism</p>
 <h3>Mesmerism</h3>
 <p>
 Mesmerism, animal magnetism, altered states, symbolic imagination and Western esoteric history.
 </p>
 </article>

 <article class="clean-feature-card">
 <p class="clean-card-kicker">Profile</p>
 <h3>About</h3>
 <p>
 Public academic and professional profile: law, economics, doctoral research, software engineering, genealogy and European memory.
 </p>
 </article>
 </div>
 </div>
</section>

<section class="clean-home-section clean-home-section-alt">
 <div class="container-wide">
 <div class="clean-intro clean-intro-compact">
 <p class="clean-kicker">Essays & Notes</p>
 <h2 class="clean-home-title">Featured Articles</h2>
 </div>

 <div class="clean-article-grid">
 {% for post in site.posts limit:4 %}
 <article class="clean-article-card">
 <p class="clean-card-kicker">{{ post.date | date: "%d %B %Y" }}</p>
 <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
 <p>{{ post.excerpt | strip_html | truncate: 150 }}</p>
 <a class="clean-read-more" href="{{ post.url }}">Read article →</a>
 </article>
 {% endfor %}
 </div>
 </div>
</section>
