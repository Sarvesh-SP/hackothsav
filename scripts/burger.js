const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
