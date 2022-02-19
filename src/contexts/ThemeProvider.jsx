import { createContext, useState } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState(`themeOne`)

    const data = { theme, setTheme }
    return (
        <ThemeContext.Provider value={ data }>
            { children }
        </ThemeContext.Provider>
    )
}
export { ThemeContext }
export default ThemeProvider
