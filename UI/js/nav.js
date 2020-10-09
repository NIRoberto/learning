const navs = () => {
  const burger = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav-list");
  burger.addEventListener("click", () => {
    nav.classList.toggle(".showing");
  });
};
navs();
