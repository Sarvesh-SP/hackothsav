let themeButton = document.getElementById("theme-button");
let navBar = document.querySelector("nav-bar");
const sunMoonContainer = document.querySelector(".sun-moon-container");
// let body = document.body;

const changeTheme = () => {
	console.log(document.documentElement.getAttribute("theme"));
	if (document.documentElement.getAttribute("theme") == "dark") {
		document.documentElement.setAttribute("theme", "light");
		body.classList.toggle("dark");
	} else {
		body.classList.toggle("dark");
		document.documentElement.setAttribute("theme", "dark");
	}
	const currentRotation = parseInt(
		getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
	);
	sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
};

themeButton.addEventListener("click", changeTheme);
