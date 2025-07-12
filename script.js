const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});






