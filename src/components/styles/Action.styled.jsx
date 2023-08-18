import styled from "styled-components"

export const StyledAction = styled.article`
    background-color: ${({theme}) => theme.backgroundColor.callToAction};
    color: #fff;
    padding-block: 4rem;
    
    h3 {
        font-size: 2rem;
    }

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10rem;
    }

    section > div {
        width: 40%;
    }

    section input {
        display: block;
        width: 100%;
        margin-right: 0;
        margin-bottom: 1.3rem;
    }

    section button {
        width: 14rem;
    }

    form {      
        width: 40%;
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        section {
            flex-direction: column;
            text-align: center;
            gap: 3rem;
        }

        section > div {
            width: 100%;
        }

        form {
            text-align: center;
            width: 100%;
        }

        section input,
        section button {
            width: 100%;
        }

        section input {
            margin-right: 0;
        }

    }
`