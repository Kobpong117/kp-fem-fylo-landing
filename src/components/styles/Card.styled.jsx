import styled from "styled-components"

export const StyledCard = styled.article`
    margin-top: 1.5rem;
    padding: 2rem;
    background-color: #fff;
    max-width: 27rem;
    width: 90vw;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        margin-inline: auto;
       article div {
        flex-direction: row;
       }
    }
`