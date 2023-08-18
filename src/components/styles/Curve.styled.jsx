import styled from "styled-components"

export const CurveStyled = styled.div`
    background-color: ${({ theme }) => theme.backgroundColor.header};
    height:100px;
    background-image: url(${({ theme }) => theme.curve.desktop});   
    background-size: cover;
    background-repeat: no-repeat;

    @media screen and (max-width: ${({ theme }) => theme.mobile}) {
        background-image: url(${({ theme }) => theme.curve.mobile});   
        height: 40px;
    }

    @media screen and (max-width: ${({ theme }) => theme.tablet}) {
        height: 60px;
    }
`