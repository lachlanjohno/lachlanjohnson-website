const hamburger = document.querySelector(".menu-icon");
const overlay = document.querySelector(".overlay");
const navLinks = document.querySelector(".navbar__links");
let count = 0;

hamburger.addEventListener("click", () => {
  if (count === 0) {
    count = count + 1;
    overlay.style.display = "block";
    navLinks.style.display = "flex";
    return;
  }
  if (count === 1) {
    count = count - 1;
    overlay.style.display = "none";
    navLinks.style.display = "none";
    return;
  }
});
