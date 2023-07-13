import {
	themes,
	applyTheme,
	getCSSVariableValue,
	setCSSVariableValue,
} from "./theme.js";

// Apply the theme
applyTheme("acPrimary", themes);

// Use the CSS variable value
window.onload = function () {
	const div = document.querySelector("#myDiv");
	const bgColor = getCSSVariableValue("--ac-color-primary");
	div.style.backgroundColor = bgColor;

	// Set a CSS variable's value
	// setCSSVariableValue("--ac-color-primary", "rgba(255, 0, 0, 1)");
};
