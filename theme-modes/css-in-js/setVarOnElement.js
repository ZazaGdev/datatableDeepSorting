import { getCSSVariableValue } from "./scripts.js";

// Apply the CSS variable value to a div's background
window.onload = function () {
	const div = document.querySelector("#myDiv");
	div.style.backgroundColor = getCSSVariableValue("--ac-color-primary");
};
