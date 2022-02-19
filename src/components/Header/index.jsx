import styled from "styled-components";
import ThemeSelector from "../ThemeSelector";

const Encabezado = styled.h1`
    color: ${props => props.xd};
    background-color: ${props => props.theme.backgroundColor}
`

const Header = ({ algo }) => {
    return (
        <header>
            <ThemeSelector />
            <Encabezado xd={algo}>
                xddd
            </Encabezado>
        </header>
    )
}

export default Header