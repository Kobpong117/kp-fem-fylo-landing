import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    & > div {
        flex: 1;
    }

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column-reverse;
        text-align: center;
        gap: .5rem;

        input, button {
            width: 100%;
            margin-bottom: .8rem;
        }


    }
    
`