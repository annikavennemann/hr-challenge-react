import styled from 'styled-components/macro'
import arrow from '../images/arrow.svg'
import searchIcon from '../images/search.svg'
import quaderIcon from '../images/quader.svg'
import menuIcon from '../images/menu.svg'


export default function BrandsHeader() {
    return (
        <Header>
            <Title>
                <h4>Your brands</h4>
                <img src={arrow} alt="" />
            </Title>
            <Search>
                <form action="#" id="search">
                    <input type="search" id="search" name="gsearch" placeholder="Search brands..." />
                </form>
                <button type="submit" form="search" value="submit">
                    <img src={searchIcon} alt="magnifier" />
                </button>
            </Search>
            <Display>
                <img src={quaderIcon} alt="" />
                <img src={menuIcon} alt="" />
            </Display>
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`

const Title = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0 0 5.4em;

    h4 {
        margin: 0 1em 0 0;
        font-size: 22px;
        color: #012E40;
        font-weight: 300;
    }
`

const Search = styled.div`
    display: flex;
    align-self: center;
    margin: 2em;
    padding-right: 1em;
    border: 1px solid #707070;

    button {
        background-color: transparent;
        border: none;
    }
`

const Display = styled.div`
    display: flex;
    padding: 0 2em;

    img {
        padding: 0 0.5em;
        width: 1.5em;
        height: auto;
    }
`