import styled from 'styled-components/macro'
import BrandSearch from './BrandSearch'
import BrandList from './BrandList'

export default function Brands() {
    
    return (
        <Wrapper>
            <BrandSearch />
            <BrandList />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    grid-area: brands; 
    background-color: #F5F6FA;
    margin-bottom: 2em;
`