document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const hero = document.querySelector(".hero");
  const burger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");

  function updateHeader() {
    if (hero) {
      if (window.scrollY > hero.offsetHeight - 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }
  }

  window.addEventListener("scroll", updateHeader);
  updateHeader();

  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      burger.classList.toggle("open"); // optional for animation
    });
  }
});
