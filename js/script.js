document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const hero = document.querySelector(".hero");

  function updateHeader() {
    if (window.scrollY > hero.offsetHeight - 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", updateHeader);
  updateHeader();
});

