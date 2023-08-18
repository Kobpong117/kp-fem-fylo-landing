import styled from "styled-components"

export const StyledFooter = styled.section`
    background-color: ${({ theme }) => theme.backgroundColor.footer};
    color: #fff;
    padding-block: 4rem;

    section {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    img {
        filter: brightness(0) invert(1);
        padding-right: .8rem;
    }

    li {
        list-style: none;
    }

    li:hover {
        cursor: pointer;
        color: hsl(224, 93%, 58%);
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        section {
            flex-direction: column;
            gap: 2rem;
        }
    }
`