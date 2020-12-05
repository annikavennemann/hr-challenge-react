import styled from 'styled-components/macro'

export default function Footer() {
    return (
        <FooterStyled>
            <p>Ⓒ 2020 All Rights Reserved | Remazing</p>
            <p>Terms & Conditions | Privacy Policy</p>
        </FooterStyled>
    )
}

const FooterStyled = styled.footer`
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    width: 97%;
    padding: 0 2em;
    font-size: 0.8em;
    background-color: #EFF1FA;
    color: #012E40;
`
