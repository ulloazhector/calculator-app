import './style.scss'

import ButtonBoard from '../ButtonBoard'
import Display from '../Display'
import Header from '../Header'

import { useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../../contexts/ThemeProvider'
import themes from '../../utils/themes'


const Div = styled.div`
background-color: ${props => themes[props.theme].backgroundColor};
`

const Calculator = () => {
    const { theme } = useContext(ThemeContext)
    const [displayContent, setDisplayContent] = useState(``)

    const clickHandle = (val) => {
        setDisplayContent(displayContent + val)
    }
    return (
        <Div className={`calculator`} theme={theme}>
            <Header />
            <Display displayContent={displayContent}/>
            <ButtonBoard clickHandle={clickHandle}/>
        </Div>
    )
}

export default Calculator
