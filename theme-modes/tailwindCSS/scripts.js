function switchTheme(theme) {
	document.documentElement.setAttribute("data-theme", theme);
}

// Add event listeners to your buttons
document
	.getElementById("switch-to-light")
	.addEventListener("click", function () {
		switchTheme("light");
	});

document
	.getElementById("switch-to-dark")
	.addEventListener("click", function () {
		switchTheme("dark");
	});

document
	.getElementById("switch-to-primary")
	.addEventListener("click", function () {
		switchTheme("primary");
	});
