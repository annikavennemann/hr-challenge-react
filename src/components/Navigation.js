import styled from 'styled-components/macro'
import homeIcon from '../images/home.svg'
import listIcon from '../images/list.svg'
import chartPieIcon from '../images/chartPie.svg'
import lightBulbIcon from '../images/lightbulb.svg'
import accountIcon from '../images/account.svg'
import userIcon from '../images/user.svg'
import arrow from '../images/arrow.svg'
import arrowOrange from '../images/arrowOrange.svg'

export default function Navigation() {
    return (
        <NavStyled>
            <div>
                <Icon src={homeIcon} alt="house" />
                <p>Dashboard</p>
            </div>
            <div>
                <Icon src={listIcon} alt="cm user interface" />
                <p>Content Management</p>
            </div>
            <div>
                <Icon src={chartPieIcon} alt="chart pie" />
                <p>Monitoring</p>
                <Arrow src={arrow} alt="" />
            </div>
            <div>
                <IconIntended src={lightBulbIcon} alt="light bulb" />
                <p>Content</p>
            </div>
            <Selected>
                <Icon src={accountIcon} alt="" />
                <p>Account</p>
                <ArrowOrange src={arrowOrange} alt="" />
            </Selected>
            <div>
                <IconIntended src={userIcon} alt="two people" />
                <p>User</p>
            </div>
        </NavStyled>
    )
}

const NavStyled = styled.nav`
    grid-area: nav;
    border-right: 0.5pt solid #7F8FA4;
    padding-top: 2.5em;

    div {
        display: flex;
        color: #7F8FA4;
        font-size: 20px;
        font-weight: 500;
    }
`

const Selected = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 500;
    background-color: #FEF8F3;

    p {
        color: #E9812D;
    }
`

const Icon = styled.img`
    padding: 0.5em 1em 0.5em 1em;
`

const IconIntended = styled.img`
    padding: 0.5em 1em 0.5em 3.5em;
`

const Arrow = styled.img`
    padding-right: 1em;
    padding-left: 5em;
`

const ArrowOrange = styled.img`
    padding-right: 1em;
    padding-left: 6.4em;
`