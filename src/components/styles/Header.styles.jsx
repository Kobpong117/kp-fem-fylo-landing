import styled from "styled-components"

export const StyledHeader = styled.header`
    background-color: ${({ theme }) => theme.backgroundColor.header};
    padding-block: 2rem;

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        button {
            margin-top: .8rem;
        }

        input {
            margin-bottom: .8rem;
        }
    }
`

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        margin-left: 1.5rem;
        margin-bottom: 0;
        cursor: pointer;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        img {
            width: 6rem;
        }
    }
`