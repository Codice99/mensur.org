document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.querySelector(".mega-menu-open");
  const closeButton = document.querySelector(".mega-menu-close");
  const overlay = document.querySelector(".mensur-menu-overlay");
  const groupButtons = document.querySelectorAll(".menu-group-title");

  if (!openButton || !overlay) return;

  function openMenu() {
    overlay.classList.add("open");
    document.body.classList.add("menu-open");
    overlay.setAttribute("aria-hidden", "false");
    openButton.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    overlay.classList.remove("open");
    document.body.classList.remove("menu-open");
    overlay.setAttribute("aria-hidden", "true");
    openButton.setAttribute("aria-expanded", "false");
  }

  openButton.addEventListener("click", openMenu);

  if (closeButton) {
    closeButton.addEventListener("click", closeMenu);
  }

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) closeMenu();
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeMenu();
  });

  groupButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const group = button.closest(".menu-group");
      group.classList.toggle("open");
    });
  });

  overlay.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });
});
