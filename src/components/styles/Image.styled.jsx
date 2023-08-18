import styled from "styled-components"

export const Image = styled.img`
    width: 40rem;

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
       width: 20rem;
       margin: 1rem;;
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
       width: 25rem;
       margin: 1rem;;
    }
`