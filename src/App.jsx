import { ThemeProvider } from "styled-components"
import Calculator from "./components/Calculator"

const themes = {
    themeOne: {
        backgroundColor: `lightgreen`
    },
    themeTwo: {
        backgroundColor: `lightblue`
    }
}

const App = () => {

    return (
        <ThemeProvider theme={themes.themeTwo}>
            <Calculator />
        </ThemeProvider>
    )
}


export default App
