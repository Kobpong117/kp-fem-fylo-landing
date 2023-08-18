import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    max-width: 100%;
    padding-inline: 4rem;
    margin: 0 auto;
    overflow: hidden;

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        padding-inline: 1.5rem;
    }
`