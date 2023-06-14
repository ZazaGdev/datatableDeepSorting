import themes from "./theme.js";

console.log(themes);

function changeTheme(themeName) {
	const theme = themes[themeName];
	Object.keys(theme).forEach((key) => {
		const value = theme[key];
		document.documentElement.style.setProperty(key, value);
	});
}

changeTheme("light");
