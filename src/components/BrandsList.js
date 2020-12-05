import styled from 'styled-components/macro'
import backgroundBlur from '../images/blur.png'
import mcDowells from '../images/mcDowells.png'
import oddish from '../images/oddish.png'
import duff from '../images/duff.png'
import umbrella from '../images/umbrella.png'
import westworld from '../images/westworld.png'
import globe from '../images/globe.png'
import encom from '../images/encom.png'

export default function BrandsList() {
    return (
        <List>
            <li>
                <BrandSelected>
                    <ButtonHighlighted>All Phases</ButtonHighlighted>
                    <Button>Monitoring</Button>
                    <Button>Amazon Cases</Button>
                    <ButtonSelected>Dashboard</ButtonSelected>
                    <Button>Product Catalog</Button>
                </BrandSelected>
            </li>
            <li>
                <BrandLogo>
                    <img src={mcDowells} alt="" />
                </BrandLogo>
            </li>
            <li>
                <BrandLogo>
                    <img src={oddish} alt="" />
                </BrandLogo>
            </li>
            <li>
                <BrandLogo>
                    <img src={duff} alt="" />
                </BrandLogo>
            </li>
            <li>
                <BrandLogo>
                    <img src={umbrella} alt="" />
                </BrandLogo>
            </li>
            <li>
                <BrandLogo>
                    <img src={westworld} alt="" />
                </BrandLogo>
            </li>
            <li>
                <BrandLogo>
                    <img src={globe} alt="" />
                </BrandLogo>
            </li>
            <li>
                <BrandLogo>
                    <img src={encom} alt="" />
                </BrandLogo>
            </li>
        </List>
    )
}

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 0 1em 0 1.5em ;

    li {
        display: inline;
        margin: 1.5em;
    }
`

const BrandLogo = styled.div`
    width: 5000vh;
    height: 500vh;
    max-width: 30vh;
    max-height: 30vh;
    border: 1px solid #707070;
    background-color: white;

    img {
        width: 80%;
        height: auto;
        display: block;
        margin: 1.6em auto;
    }
`

const BrandSelected = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5000vh;
    height: 500vh;
    max-width: 30vh;
    max-height: 30vh;
    border: 1px solid #707070;
    background-image: url(${backgroundBlur});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const Button = styled.button`
    padding: 0.5em 0;
    margin: 0.25em 0;
    font-family: 'Roboto', sans-serif;
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: 500;
    color: #012E40;
    width: 80%;
`

const ButtonHighlighted = styled.button`
    padding: 0.5em 0;
    margin: 1em 0 0.25em 0;
    font-family: 'Roboto', sans-serif;
    background-color: transparent;
    border: none;
    font-size: 18px;
    font-weight: 500;
    color: #E9812D;
    width: 80%;
`

const ButtonSelected = styled.button`
    padding: 0.5em 0;
    margin: 0.25em 0;
    font-family: 'Roboto', sans-serif;
    background-color: #E9812D;
    border-radius: 35px;
    border: none;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
    width: 80%;
`