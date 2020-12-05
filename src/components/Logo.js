import styled from 'styled-components/macro'
import logo from '../images/remazing.png'

export default function Logo() {
    return (
        <LogoStyled>
            <img src={logo} alt="rising logo" />
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    grid-area: logo;
    border: 0.5pt solid #7F8FA4;

    img {
        display: block;
        margin: auto;
        height: 2.7em;
        width: auto;
        padding: 1em;
    }
`