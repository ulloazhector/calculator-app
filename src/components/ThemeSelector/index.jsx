import { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import './style.scss'
const ThemeSelector = () => {
    const { theme, setTheme} = useContext(ThemeContext)

    return (
        <div className="selector">
            <div className='opt opt-1' onClick={() => setTheme(`theme-one`)}></div>
            <div className='opt opt-2' onClick={() => setTheme(`theme-two`)}></div>
            <div className='opt opt-3' onClick={() => setTheme(`theme-three`)}></div>
            <div className={`switch ${theme}`}></div>
        </div>
    )
}

export default ThemeSelector
