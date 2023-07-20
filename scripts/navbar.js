const toggleNavbar = document.querySelector(".hamburger-toggle");
const menu = document.querySelector(".menu");

toggleNavbar.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.toggle("active");
});
