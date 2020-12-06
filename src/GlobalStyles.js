import { createGlobalStyle } from 'styled-components/macro'

export default createGlobalStyle`
    html, body {
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;
    }

    input[type=text] {
        padding: 0 15em 0 2em ;
        background: transparent;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        border: none;
    }
`



