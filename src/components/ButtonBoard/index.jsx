import './style.scss'

const buttons = [
    { id: 1, name: `0`, content: `0` },
    { id: 2, name: `1`, content: `1` },
    { id: 3, name: `2`, content: `2` },
    { id: 4, name: `3`, content: `3` },
    { id: 5, name: `4`, content: `4` },
    { id: 6, name: `5`, content: `5` },
    { id: 7, name: `6`, content: `6` },
    { id: 8, name: `7`, content: `7` },
    { id: 9, name: `8`, content: `8` },
    { id: 10, name: `9`, content: `9` },
    { id: 11, name: `dot`, content: `.` },
    { id: 12, name: `del`, content: `DEL` },
    { id: 13, name: `add`, content: `+` },
    { id: 14, name: `sub`, content: `−` },
    { id: 15, name: `mul`, content: `×` },
    { id: 16, name: `div`, content: `/` },
    { id: 17, name: `reset`, content: `RESET` },
    { id: 18, name: `equ`, content: `=` },
]

const ButtonBoard = ({ clickHandle }) => {
    return (
        <div className='board'>
            {
                buttons.map(({ id, name, content }) =>
                    <button 
                        key={id} 
                        className={`btn btn-${name}`}
                        onClick={() => clickHandle(name)}
                    >
                        {content}
                    </button>
                )
            }
        </div>
    )
}

export default ButtonBoard
