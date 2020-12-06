import styled from 'styled-components/macro'
import arrow from '../images/arrow.svg'
import menuIcon from '../images/menu.svg'
import quaderIcon from '../images/quader.svg'
import searchIcon from '../images/search.svg'
import { useEffect, useState } from 'react'
import getBrands from '../service/getBrands'
import saveLocally from '../lib/saveLocally'
import loadLocally from '../lib/loadLocally'

export default function BrandSearch() {

    const [brand, setBrand] = useState(loadLocally('brand') ?? [{
        id: null,
        name: '',
        img: '',
        rating: null,
        newReviews: null
    }])
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    
    useEffect(() => {
        getBrands()
        .then(brand => setBrand(brand))
        .catch(error => console.log(error))
    }, [])
    
    useEffect(() => {
        saveLocally('brand', brand)
    },[brand])
    
    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    }
    
    useEffect(() => {
        const results = brand.filter(brand =>
            brand.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setSearchResults(results)
        }, [searchTerm, brand]);
        
        
    const [showResults, setShowResults] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()
        setShowResults(true)
    }

    const Results = () => (
    <List>
            {searchResults.map((brand) => {
                if (brand) {
                    return (
                        <li key={brand.name}>
                            <h3>{brand.name}</h3>
                                <h4>Rating:</h4>
                                <p>{brand.rating} / 5</p>
                            <h4>New Reviews:</h4>
                            <p>{brand.newReviews}</p>
                        </li>
                    )
                } return null
            })}
        </List>
    )

    return (
        <>
        <Header>
            <Title>
                <h4>Your brands</h4>
                <img src={arrow} alt="" />
            </Title>
            
            <Form onSubmit={handleSubmit} >
                <input
                    id="search"
                    type="text" 
                    name="search"
                    value={searchTerm}
                    placeholder="Show brand details..."
                    onChange={handleChange}
                />

                <button type="submit">
                    <img src={searchIcon} alt="magnifier" />
                </button>
            </Form>

            <Display>
                <img src={quaderIcon} alt="" />
                <img src={menuIcon} alt="" />
            </Display>
        </Header>
        <div>
            { showResults ? <Results /> : null }
        </div>
        </>
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

const Form = styled.form`
    display: flex;
    align-self: center;
    margin: 2em;
    border-radius: 25px;
    background: white;
    border: none;
    padding: 0.25em 0.5em;

    button {
        width: 3em;
        height: 3em;
        background-color: #FFFFFF;
        border: 2px solid #C4C4C4;
        border-radius: 50%;
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
        width: 5000vh;
        height: 500vh;
        max-width: 30vh;
        max-height: 30vh;
        border: 1px solid #C4C4C4;
        background-color: white;
        text-align: center
    }

    h3 {
        color: #E9812D;
        font-size: 24px; 
    }

    h4 {
        margin-bottom: 0.5em;
        font-size: 20px;
        color: #012E40;
        font-weight: 300;
    }

    p {
        font-size: 18px;
        color: #012E40;
        font-weight: 300;
    }
`