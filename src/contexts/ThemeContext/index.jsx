import { useState, createContext } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(`theme-one`)

    const data = { theme, setTheme }

    return (
        <ThemeContext.Provider value={ data }>
            { children }
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }
export default ThemeContext
