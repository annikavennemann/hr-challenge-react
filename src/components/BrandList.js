import styled from 'styled-components/macro'
import backgroundBlur from '../images/brandLogos/blur.png'

export default function BrandList() {
    const brands = [
        'mcDowells',
        'oddish',
        'duff',
        'umbrella',
        'westworld',
        'globe',
        'encom'
    ];
    
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
            {brands.map(brand => (
                <li>
                    <BrandLogo>
                        <img src={process.env.PUBLIC_URL + "/assets/brandLogos/" + brand + ".png"} alt="logo" />
                    </BrandLogo>
                </li>
            ))}
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
    border: 1px solid #C4C4C4;
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
    border: 1px solid #C4C4C4;
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