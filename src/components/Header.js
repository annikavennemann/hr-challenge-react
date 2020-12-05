import styled from 'styled-components/macro'
import alert from '../images/alert.svg'
import profilePicture from '../images/jeffBezos.png'

export default function Header() {
    return (
        <HeaderStyled>
            <Wrapper>
                <AlertIcon src={alert} alt="bell" />
                <p>JB</p>
                <ProfilePicture src={profilePicture} alt="" />
            </Wrapper>
        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    grid-area: header;
    border: 0.5pt solid #7F8FA4;
    border-left: none;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin: 0 2em;

    p {
        font-weight: medium;
        font-size: 22px;
    }
`

const AlertIcon = styled.img`
    width: 1.5em;
    height: auto;
    padding: 1.5em 2em;

`

const ProfilePicture = styled.img`
    width: 3.7em;
    height: auto;
    padding: 0.5em 1em;
`