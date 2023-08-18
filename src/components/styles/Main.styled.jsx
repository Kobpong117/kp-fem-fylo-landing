import styled from "styled-components"

export const StyledMain = styled.main`
    background-color: ${({ theme }) => theme.backgroundColor.body};
    padding-block: 3rem;

    p {
        text-align: start;
    }

    a {
        padding-bottom: .4rem;
        color: hsl(170, 45%, 43%);
        border-bottom: 1px solid hsl(170, 45%, 43%);
        cursor: pointer;
    }

    article img {
        transform: translateY(.2rem);
    }

    article small {
        font-size: 12px;
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        article {
            text-align: center;
        }
    }
`