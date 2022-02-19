import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeProvider'
import './style.scss'
const ThemeSelector = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
        <div className="selector">
            <div className='opt opt-1' onClick={() => setTheme(`themeOne`)}></div>
            <div className='opt opt-2' onClick={() => setTheme(`themeTwo`)}></div>
            <div className='opt opt-3' onClick={() => setTheme(`themeThree`)}></div>
            <div className={`switch ${theme}`}></div>
        </div>
    )
}

export default ThemeSelector
