let themeButton = document.getElementById("theme-button");
let navBar = document.querySelector("nav-bar");
// let body = document.body;

const changeTheme = () => {
	// console.log(document.documentElement.getAttribute("theme"));
	if (document.documentElement.getAttribute("theme") == "dark")
		document.documentElement.setAttribute("theme", "light");
	else document.documentElement.setAttribute("theme", "dark");
};

themeButton.addEventListener("click", changeTheme);
