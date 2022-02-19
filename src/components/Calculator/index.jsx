import './style.scss'

import ButtonBoard from '../ButtonBoard'
import Display from '../Display'
import Header from '../Header'

import { useState } from 'react'

const Calculator = () => {
    const [displayContent, setDisplayContent] = useState(``)

    const clickHandle = (val) => {
        setDisplayContent(displayContent + val)
    }
    return (
        <div className={`calculator`}>
            <Header algo='red' />
            <Display displayContent={displayContent}/>
            <ButtonBoard clickHandle={clickHandle}/>
        </div>
    )
}

export default Calculator
