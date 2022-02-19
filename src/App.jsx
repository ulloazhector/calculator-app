import ThemeProvider from "./contexts/ThemeProvider"
import Calculator from "./components/Calculator"

const App = () => {

    return (
        <ThemeProvider>
            <Calculator />
        </ThemeProvider>
    )
}


export default App
