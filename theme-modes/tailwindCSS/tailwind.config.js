// tailwind.config.js
module.exports = {
	purge: {
		content: ["./**/*.html", "./**/*.js"],
		enabled: process.env.NODE_ENV === "production",
	},
	theme: {},
	variants: {},
	plugins: [],
};
