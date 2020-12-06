import styled from 'styled-components/macro'

export default function Headline() {
    return (
        <HeadlineStyled>
            <h3>Brands</h3>
        </HeadlineStyled>
    )
}

const HeadlineStyled = styled.div`
    grid-area: headline;
    background-color: #F9FAFC;
    border-bottom: 0.5pt solid #C4C4C4;
    color: #012E40;

    h3 {
        margin: 0;
        padding: 0.7em 0 0.7em 3em;
        font-size: 24px;
    }
`