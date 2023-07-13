const themeCongif = {
	fontSizeNum: 1,
	borderRadNum: 1,
	lineHeightNum: 1,
	spaceNum: 1,
};

const themes = {
	themeCongif,
	vars: {
		acPrimary: {
			// Fonts
			"--ac-font-primary": `Poppins, Helvetica, "sans-serif"`,
			"--ac-font-secondary": `"sans-serif"`,
			// Colors
			"--ac-color-primary": "rgba(42, 98, 167, 1)", // #2A62A7
			"--ac-color-secondary": "rgba(68, 153, 127, 1)", // #2A62A7
			"--ac-color-border": "rgba(228, 230, 239, 1)", // #E4E6EF
			"--ac-color-text-gray": "rgba(102, 112, 133, 1)", // #667085
			"--ac-color-text-main": "rgba(63, 66, 84, 1)", // #3F4254
			"--ac-color-text-dark": "rgba(16, 24, 40, 1)", // #101828
			"--ac-color-gray": "rgba(238, 238, 238, 1)", // #EEEEEE
			"--ac-color-gray-bg": "rgba(242, 244, 247, 1)", // #F2F4F7
			"--ac-color-gray-50": "rgba(249, 250, 251, 1)", // #F9FAFB
			"--ac-color-warning": "rgba(186, 27, 35, 1)", // #BA1B23
			"--ac-color-white": "rgba(255, 255, 255, 1)", // #FFFFFF
			"--ac-color-error": "rgba(240, 68, 56, 1)", // #F04438
			"--ac-color-error-light": "rgba(253, 162, 155, 1)", // #FDA29B
			"--ac-color-primary-25": "rgba(237, 245, 255, 1)", // #EDF5FF
			"--ac-color-primary-50": "rgba(205, 225, 252, 1)", // #CDE1FC
			"--ac-color-primary-100": "rgba(168, 202, 244, 1)", // #A8CAF4
			"--ac-color-primary-200": "rgba(131, 175, 231, 1)", // #83AFC7
			"--ac-color-primary-300": "rgba(94, 144, 206, 1)", // #5E90CE
			"--ac-color-primary-400": "rgba(62, 117, 185, 1)", // #3E75B9
			"--ac-color-primary-500": "rgba(42, 98, 167, 1)", // #2A62A7
			"--ac-color-primary-600": "rgba(33, 87, 153, 1)", // #21579D
			"--ac-color-primary-700": "rgba(21, 71, 132, 1)", // #154784
			"--ac-color-primary-800": "rgba(11, 52, 103, 1)", // #0B3467
			"--ac-color-primary-900": "rgba(9, 42, 83, 1)", // #092A53
			"--ac-color-secondary-25": "rgba(237, 255, 249, 1)", // #EDFFF9
			"--ac-color-secondary-50": "rgba(217, 250, 240, 1)", // #D9FAF0
			"--ac-color-secondary-100": "rgba(180, 237, 219, 1)", // #B4EDDB
			"--ac-color-secondary-200": "rgba(153, 221, 200, 1)", // #99DDC8
			"--ac-color-secondary-300": "rgba(116, 203, 176, 1)", // #74CBB0
			"--ac-color-secondary-400": "rgba(91, 178, 152, 1)", // #5BB298
			"--ac-color-secondary-500": "rgba(68, 153, 127, 1)", // #44997F
			"--ac-color-secondary-600": "rgba(48, 141, 113, 1)", // #308D71
			"--ac-color-secondary-700": "rgba(29, 119, 92, 1)", // #1D775C
			"--ac-color-secondary-800": "rgba(16, 100, 75, 1)", // #10644B
			"--ac-color-secondary-900": "rgba(9, 61, 45, 1)", // #093D2D
			"--ac-color-error-25": "rgba(255, 251, 250, 1)", // #FFFBFA
			"--ac-color-error-50": "rgba(254, 243, 242, 1)", // #FEF3F2
			"--ac-color-error-100": "rgba(254, 228, 226, 1)", // #FEE4E2
			"--ac-color-error-200": "rgba(254, 205, 202, 1)", // #FECDCa
			"--ac-color-error-300": "rgba(253, 162, 155, 1)", // #FDA29B
			"--ac-color-error-400": "rgba(249, 112, 102, 1)", // #F97066
			"--ac-color-error-500": "rgba(240, 68, 56, 1)", // #F04438
			"--ac-color-error-600": "rgba(217, 45, 32, 1)", // #D92D20
			"--ac-color-error-600-hover": "rgba(217, 45, 32, 0.7)",
			"--ac-color-error-700": "rgba(180, 35, 24, 1)", // #B42318
			"--ac-color-error-800": "rgba(145, 32, 24, 1)", // #912018
			"--ac-color-error-900": "rgba(122, 39, 26, 1)", // #7A271A
			"--ac-color-warning-25": "rgba(255, 252, 245, 1)", // #FFFCF5
			"--ac-color-warning-50": "rgba(255, 250, 235, 1)", // #FFFAEB
			"--ac-color-warning-100": "rgba(254, 240, 199, 1)", // #FEF0C7
			"--ac-color-warning-200": "rgba(254, 223, 137, 1)", // #FEDF89
			"--ac-color-warning-300": "rgba(254, 200, 75, 1)", // #FEC84B
			"--ac-color-warning-400": "rgba(253, 176, 34, 1)", // #FDB022
			"--ac-color-warning-500": "rgba(247, 144, 9, 1)", // #F79009
			"--ac-color-warning-600": "rgba(220, 104, 3, 1)", // #DC6803
			"--ac-color-warning-700": "rgba(181, 71, 8, 1)", // #B54708
			"--ac-color-warning-800": "rgba(147, 55, 13, 1)", // #93370D
			"--ac-color-warning-900": "rgba(122, 46, 14, 1)", // #7A2E0E
			"--ac-color-success-25": "rgba(246, 254, 249, 1)", // #F6FEF9
			"--ac-color-success-50": "rgba(236, 253, 243, 1)", // #ECFDF3
			"--ac-color-success-100": "rgba(209, 250, 223, 1)", // #D1FADF
			"--ac-color-success-200": "rgba(166, 244, 197, 1)", // #A6F4C5
			"--ac-color-success-300": "rgba(108, 233, 166, 1)", // #6CE9A6
			"--ac-color-success-400": "rgba(50, 213, 131, 1)", // #32D583
			"--ac-color-success-500": "rgba(18, 183, 106, 1)", // #12B76A
			"--ac-color-success-600": "rgba(3, 152, 85, 1)", // #039855
			"--ac-color-success-700": "rgba(2, 122, 72, 1) ", // #027A48
			"--ac-color-success-800": "rgba(5, 96, 58, 1)", // #05603A
			"--ac-color-success-900": "rgba(5, 79, 49, 1)", // #054F31
			"--ac-color-gray-50": "rgba(249, 250, 251, 1)", // #F9FAFB
			"--ac-color-gray-100": "rgba(248, 249, 250, 1)", // #F8F9FA
			"--ac-color-gray-200": "rgba(234, 236, 240, 1)", // #EAECF0
			"--ac-color-gray-300": "rgba(208, 213, 221, 1)", // #D0D5DD
			"--ac-color-gray-500": "rgba(102, 112, 133, 1)", // #667085
			"--ac-color-gray-700": "rgba(52, 64, 84, 1)", // #344054
			"--ac-color-gray-900": "rgba(16, 24, 40, 1)", // #101828
			// Animation speed
			"--ac-transition-sm": "0.1s all",
			"--ac-transition-md": "0.3s all",
			"--ac-transition-lg": "0.5s all",
			"--ac-transition-xl": "0.7s all",
			"--ac-transition-xxl": "0.9s all",
			// Border
			"--ac-border-width-1": `1px`,
			"--ac-border-width-2": `2px`,
			"--ac-border-width-3": `3px`,
			"--ac-border-width-4": `5px`,
			"--ac-border-radius-1": `${themeCongif.borderRadNum * 2}px`,
			"--ac-border-radius-2": `${themeCongif.borderRadNum * 4}px`,
			"--ac-border-radius-3": `${themeCongif.borderRadNum * 6}px`,
			"--ac-border-radius-4": `${themeCongif.borderRadNum * 8}px`,
			"--ac-border-radius-5": `${themeCongif.borderRadNum * 10}px`,
			"--ac-border-radius-6": `${themeCongif.borderRadNum * 12}px`,
			"--ac-border-radius-7": `${themeCongif.borderRadNum * 14}px`,
			"--ac-border-radius-8": `${themeCongif.borderRadNum * 16}px`,
			"--ac-border-radius-9": `${themeCongif.borderRadNum * 18}px`,
			"--ac-border-radius-9": `${themeCongif.borderRadNum * 20}px`,
			// Spacing
			"--ac-space-1": `${themeCongif.spaceNum * 2}px`,
			"--ac-space-2": `${themeCongif.spaceNum * 3}px`,
			"--ac-space-3": `${themeCongif.spaceNum * 4}px`,
			"--ac-space-4": `${themeCongif.spaceNum * 5}px`,
			"--ac-space-5": `${themeCongif.spaceNum * 6}px`,
			"--ac-space-6": `${themeCongif.spaceNum * 8}px`,
			"--ac-space-7": `${themeCongif.spaceNum * 10}px`,
			"--ac-space-8": `${themeCongif.spaceNum * 12}px`,
			"--ac-space-9": `${themeCongif.spaceNum * 14}px`,
			"--ac-space-10": `${themeCongif.spaceNum * 16}px`,
			"--ac-space-11": `${themeCongif.spaceNum * 18}px`,
			"--ac-space-12": `${themeCongif.spaceNum * 20}px`,
			"--ac-space-13": `${themeCongif.spaceNum * 24}px`,
			"--ac-space-14": `${themeCongif.spaceNum * 32}px`,
			"--ac-space-15": `${themeCongif.spaceNum * 40}px`,
			// Fonts
			"--ac-font-weight-1": 300,
			"--ac-font-weight-2": 400,
			"--ac-font-weight-3": 500,
			"--ac-font-weight-4": 600,
			"--ac-font-weight-5": 700,
			"--ac-font-weight-6": 900,
			"--ac-font-size-1": `${themeCongif.fontSizeNum * 0.5}rem`,
			"--ac-font-size-2": `${themeCongif.fontSizeNum * 0.625}rem`,
			"--ac-font-size-3": `${themeCongif.fontSizeNum * 0.75}rem`,
			"--ac-font-size-4": `${themeCongif.fontSizeNum * 0.875}rem`,
			"--ac-font-size-5": `${themeCongif.fontSizeNum * 1}rem`,
			"--ac-font-size-6": `${themeCongif.fontSizeNum * 1.125}rem`,
			"--ac-font-size-7": `${themeCongif.fontSizeNum * 1.25}rem`,
			"--ac-font-size-8": `${themeCongif.fontSizeNum * 1.375}rem`,
			"--ac-font-size-9": `${themeCongif.fontSizeNum * 1.5}rem`,
			"--ac-font-size-10": `${themeCongif.fontSizeNum * 1.625}rem`,
			"--ac-font-size-11": `${themeCongif.fontSizeNum * 1.75}rem`,
			"--ac-font-size-12": `${themeCongif.fontSizeNum * 1.875}rem`,
			"--ac-font-size-13": `${themeCongif.fontSizeNum * 2}rem`,
			"--ac-font-size-14": `${themeCongif.fontSizeNum * 2.25}rem`,
			"--ac-font-size-15": `${themeCongif.fontSizeNum * 2.5}rem`,
			"--ac-font-size-16": `${themeCongif.fontSizeNum * 2.75}rem`,
			"--ac-font-size-17": `${themeCongif.fontSizeNum * 3}rem`,
			"--ac-font-size-18": `${themeCongif.fontSizeNum * 3.5}rem`,
			"--ac-font-size-19": `${themeCongif.fontSizeNum * 4}rem`,
			"--ac-font-size-20": `${themeCongif.fontSizeNum * 5}rem`,
			"--ac-line-height-1": `${themeCongif.lineHeightNum * 0.5}rem`,
			"--ac-line-height-2": `${themeCongif.lineHeightNum * 0.625}rem`,
			"--ac-line-height-3": `${themeCongif.lineHeightNum * 0.75}rem`,
			"--ac-line-height-4": `${themeCongif.lineHeightNum * 0.875}rem`,
			"--ac-line-height-5": `${themeCongif.lineHeightNum * 1}rem`,
			"--ac-line-height-6": `${themeCongif.lineHeightNum * 1.125}rem`,
			"--ac-line-height-7": `${themeCongif.lineHeightNum * 1.25}rem`,
			"--ac-line-height-8": `${themeCongif.lineHeightNum * 1.375}rem`,
			"--ac-line-height-9": `${themeCongif.lineHeightNum * 1.5}rem`,
			"--ac-line-height-9": `${themeCongif.lineHeightNum * 1.75}rem`,
			"--ac-line-height-10": `${themeCongif.lineHeightNum * 2}rem`,
		},
	},
};

export default themes;
