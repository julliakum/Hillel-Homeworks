document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("nav__burger-btn").addEventListener("click", function() {
      document.querySelector(".nav").classList.toggle("open")
    })
});


document.getElementById("nav-links__list").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.getElementById("nav__burger-btn").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event => {
  if (event._isClickWithInMenu) return;
  document.querySelector(".nav").classList.remove("open")
});