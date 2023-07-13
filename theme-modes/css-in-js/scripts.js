import themes from "./theme.js";

const root = document.documentElement;

function applyTheme(themeName) {
	console.log(themeName);
	// Get the theme from the themes object
	const theme = themes.vars[themeName];

	if (!theme) {
		console.error(`Theme ${themeName} does not exist.`);
		return;
	}

	// Assign each property in the theme to a CSS variable on the root
	Object.keys(theme).forEach((property) => {
		root.style.setProperty(property, theme[property]);
	});
}

export function getCSSVariableValue(variableName) {
	// Get the root element
	const root = document.documentElement;

	// Get the value of the CSS variable
	const value = getComputedStyle(root).getPropertyValue(variableName);

	return value.trim(); // trim() is used to remove any leading/trailing whitespace
}
applyTheme("acPrimary"); // Call this function to apply the 'acPrimary' theme

// Usage
console.log(getCSSVariableValue("--ac-color-primary"));
