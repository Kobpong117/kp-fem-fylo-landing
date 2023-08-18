import { createGlobalStyle } from "styled-components"

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@400;700&display=swap');

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    h1, h2, h3 {
        font-family: 'Raleway', sans-serif;
        line-height: 3rem;
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2.5rem;
    }

    a, p, small, li {
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        line-height: 2rem;
        margin-bottom: 1rem;
    }

    input {
        display: inline-block;
        padding: .9rem;
        width: 20rem;
        margin-right: .5rem;
        border-radius: .2rem;
        border: .3px solid #000;
        margin-bottom: .5rem;
    }

    button {
        padding: 1rem 2rem;
        color: #fff;
        background-color: hsl(224, 93%, 58%);
        border: transparent;
        width: 12rem;
        border-radius: .2rem;
    }

    button:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        html {
            font-size: 12px;
        }
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        html {
            font-size: 13px;
        }
    }
`

export default Global