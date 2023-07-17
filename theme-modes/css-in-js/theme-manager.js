const THEME_PFX = 'theme-'
const THEME_SFX = '.js'

function resolveThemeFile(themeName) {
    return `./themes/${THEME_PFX}${themeName}${THEME_SFX}`
}

export default class ThemeManager {
    static async applyTheme(name) {
        let moduleObj = null

        if (name.charAt(0) == '@') {
            moduleObj = await import(`/UI_Common/Theme/${name}`)
        } else {
            moduleObj = await import(resolveThemeFile(name))
        }

        const theme = moduleObj.default
        const root = document.documentElement

        Object.entries(theme).forEach(([key, value]) => {
            root.style.setProperty(key, value)
        })
    }
    static getCSSVariableValue(variableName) {
        const root = document.documentElement
        const value = getComputedStyle(root).getPropertyValue(variableName)

        return value.trim()
    }
    static setCSSVariableValue(variableName, value) {
        const root = document.documentElement
        root.style.setProperty(variableName, value)
    }
}
