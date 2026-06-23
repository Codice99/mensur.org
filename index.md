---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-content">
    <p class="eyebrow">Weissmann–Greiffenberg Research Archive</p>
    <h1>Mensur</h1>
    <p class="hero-subtitle">
      A research archive on lineage, law and European memory.
    </p>
    <p class="hero-text">
      Genealogy, European historical memory, energy law, symbolism, intellectual history and long-form research notes.
    </p>
    <div class="hero-actions">
      <a class="button primary" href="/articles/">Read Articles</a>
      <a class="button secondary" href="/research-lines/">Research Lines</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <p class="eyebrow">Structure</p>
    <h2>Research Lines</h2>
    <p>The archive is organised around six connected fields of research.</p>
  </div>

  <div class="grid cards">
    <a class="card" href="/research-lines/">
      <span class="card-number">I</span>
      <h3>Mediterranean–Levantine</h3>
      <p>Italy, Spain, Greece, Jewish-Greek memory, the Eastern Mediterranean and the Levantine horizon.</p>
    </a>

    <a class="card" href="/research-lines/">
      <span class="card-number">II</span>
      <h3>Germanic–Alpine</h3>
      <p>Weissmann, Greiffenberg, Gabrielli, Austria, Tyrol, Germany and Central Europe.</p>
    </a>

    <a class="card" href="/research-lines/">
      <span class="card-number">III</span>
      <h3>Nordic–Arctic</h3>
      <p>Northern memory, Scandinavian hypotheses, migration traditions and the symbolic North.</p>
    </a>

    <a class="card" href="/research-lines/">
      <span class="card-number">IV</span>
      <h3>Eastern Slavic–Eurasian</h3>
      <p>Russian, Eastern European and Eurasian traces in family memory and historical reconstruction.</p>
    </a>

    <a class="card" href="/research-lines/">
      <span class="card-number">V</span>
      <h3>Energy Law & Hydrogen</h3>
      <p>EU energy regulation, renewable hydrogen, internal market design and regulatory clarity.</p>
    </a>

    <a class="card" href="/research-lines/">
      <span class="card-number">VI</span>
      <h3>Symbolism & Intellectual History</h3>
      <p>Heraldry, symbolic systems, Western esotericism, myth, memory and intellectual traditions.</p>
    </a>
  </div>
</section>

<section class="section dark-section">
  <div class="section-heading">
    <p class="eyebrow">Latest</p>
    <h2>Featured Articles</h2>
  </div>

  <div class="article-grid">
    {% for post in site.posts limit:6 %}
    <article class="article-card">
      <p class="post-meta">{{ post.date | date: "%d %B %Y" }} · {{ post.categories | join: ", " }}</p>
      <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
      <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
      <a class="read-more" href="{{ post.url }}">Read article →</a>
    </article>
    {% endfor %}
  </div>
</section>

<section class="section two-column">
  <div>
    <p class="eyebrow">Archive</p>
    <h2>A digital cabinet of notes and fragments</h2>
  </div>
  <div>
    <p>
      Mensur is designed as a long-term personal archive: part research notebook, part genealogical cabinet, part essay platform.
    </p>
    <p>
      It combines structured articles with shorter notes, bibliographic entries, archival references and thematic pages.
    </p>
  </div>
</section>
