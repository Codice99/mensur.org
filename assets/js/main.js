document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  if (!toggle || !nav) return;

  toggle.addEventListener("click", function () {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
});

/* Home feature cards clickable links */
document.addEventListener("DOMContentLoaded", function () {
  const homeCards = document.querySelectorAll(
    ".clean-feature-card, .feature-card, .research-card, .home-card"
  );

  const routes = {
    "Weissmann & Greiffenberg": "/research-lines/",
    "Lineage & Nobility": "/research-lines/",
    "Aristocratic Memory": "/research-lines/",
    "Symbolism & Esotericism": "/research-lines/",
    "Mesmerism": "/articles/mesmeric-arts/",
    "About": "/about/"
  };

  homeCards.forEach(function (card) {
    const title = card.querySelector("h2, h3, .card-title");
    if (!title) return;

    const label = title.textContent.trim();
    const href = routes[label];

    if (!href) return;

    card.setAttribute("role", "link");
    card.setAttribute("tabindex", "0");
    card.classList.add("clickable-card");

    card.addEventListener("click", function (event) {
      if (event.target.closest("a")) return;
      window.location.href = href;
    });

    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        window.location.href = href;
      }
    });
  });
});
