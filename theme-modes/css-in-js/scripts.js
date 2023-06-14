import { themes } from "./theme.js";

function changeTheme(themeName) {
	const theme = themes[themeName];
	Object.keys(theme).forEach((key) => {
		const value = theme[key];
		document.documentElement.style.setProperty(key, value);
	});
}

document
	.getElementById("switch-to-light")
	.addEventListener("click", function () {
		changeTheme("light");
	});

document
	.getElementById("switch-to-dark")
	.addEventListener("click", function () {
		changeTheme("dark");
	});

document
	.getElementById("switch-to-primary")
	.addEventListener("click", function () {
		changeTheme("primary");
	});

changeTheme("light");
