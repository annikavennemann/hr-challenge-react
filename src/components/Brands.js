import styled from 'styled-components/macro'
import BrandsHeader from './BrandsHeader'
import BrandsList from './BrandsList'

export default function Brands() {
    return (
        <Wrapper>
           <BrandsHeader />
           <BrandsList />
        </Wrapper>
    )
}

const Wrapper = styled.main`
    grid-area: brands; 
    background-color: #F5F6FA;
    margin-bottom: 2em;
`