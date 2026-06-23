---
layout: default
title: Home
---

<section class="hero">
  <div class="hero-panel">
    <p class="kicker">Weissmann–Greiffenberg Institute Project</p>
    <h1>Mensur</h1>
    <p class="hero-subtitle">
      Lineage, nobility, identity, symbolism and European legal thought.
    </p>
    <p class="hero-text">
      Mensur is an emerging cultural and intellectual project devoted to noble memory, Jewish aristocratic history, genealogy, Western esotericism, European identity, legal thought and contemporary energy regulation.
    </p>
    <div class="hero-actions">
      <a class="button primary" href="/project/">The Project</a>
      <a class="button secondary" href="/about/">About</a>
    </div>
  </div>
</section>

<section class="section intro-section">
  <div class="container two-column">
    <div>
      <p class="kicker">Name & Spirit</p>
      <h2>The meaning of Mensur</h2>
    </div>
    <div class="text-block">
      <p>
        The name <em>Mensur</em> refers to the Central European tradition of academic fencing: a discipline of distance, composure, honour and form.
      </p>
      <p>
        Within the symbolic horizon of the Weissmann and Greiffenberg families, it evokes not violence, but measure; not spectacle, but discipline; not nostalgia, but continuity.
      </p>
    </div>
  </div>
</section>

<section class="section white-section">
  <div class="container">
    <div class="section-heading">
      <p class="kicker">Institute Project</p>
      <h2>The Weissmann–Greiffenberg horizon</h2>
      <p>
        Mensur brings together lineage, nobility, Jewish aristocratic memory, genealogy, symbolism, European historical consciousness and legal-energy research.
      </p>
    </div>

    <div class="feature-grid">
      <a class="feature-card" href="/project/">
        <span>I</span>
        <h3>Weissmann & Greiffenberg</h3>
        <p>Two noble family traditions rooted in Central Europe: Prussia, Germany, Austria and the Alpine–Northern Italian world.</p>
      </a>

      <a class="feature-card" href="/research-lines/">
        <span>II</span>
        <h3>Lineage & Nobility</h3>
        <p>Genealogy, aristocratic memory, noble traditions, family history and the reconstruction of European lineages.</p>
      </a>

      <a class="feature-card" href="/research-lines/">
        <span>III</span>
        <h3>Jewish Aristocratic Memory</h3>
        <p>Jewish history, identity, memory and the cultural intersections between Jewish and European aristocratic worlds.</p>
      </a>

      <a class="feature-card" href="/research-lines/">
        <span>IV</span>
        <h3>Symbolism & Esotericism</h3>
        <p>Western esotericism, heraldry, symbolic systems, ritual forms, myth, memory and intellectual history.</p>
      </a>

      <a class="feature-card" href="/research-lines/">
        <span>V</span>
        <h3>Energy Law & Hydrogen</h3>
        <p>EU energy regulation, renewable hydrogen, internal market design, infrastructure and regulatory clarity.</p>
      </a>

      <a class="feature-card" href="/about/">
        <span>VI</span>
        <h3>About</h3>
        <p>Public academic, professional and intellectual profile: law, economics, doctoral research, software engineering, genealogy and European memory.</p>
      </a>
    </div>
  </div>
</section>

<section class="section dark-section">
  <div class="container">
    <div class="section-heading">
      <p class="kicker">Essays & Notes</p>
      <h2>Articles</h2>
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
  </div>
</section>

<section class="section final-section">
  <div class="container two-column">
    <div>
      <p class="kicker">Purpose</p>
      <h2>A future association or foundation</h2>
    </div>
    <div class="text-block">
      <p>
        From the convergence of the Weissmann and Greiffenberg family traditions arises a duty of preservation, study and transmission.
      </p>
      <p>
        Mensur is conceived as the first public form of a future association or foundation devoted to memory, culture, research and intellectual continuity.
      </p>
    </div>
  </div>
</section>
