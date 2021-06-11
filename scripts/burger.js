const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-links");
const navLink = document.querySelectorAll(".link");
var body = document.body;

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));
function mobileMenu() {
	body.classList.toggle("active");
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
}

function closeMenu() {
	body.classList.toggle("active");
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}
