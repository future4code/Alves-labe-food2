import styled from "styled-components";

export const CardRestaurante = styled.div`
    width: 328px;
    height: 188px;
    padding: 0 0 16px;
    border-radius: 8px;
    border:1px solid #b8b8b8;
    margin-bottom:10px;

    img {
    width: 328px;
    height: 120px;
    object-fit:cover;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    }

    h3{
    font-size: 16px;
    font-weight: normal;
    margin: 12px 16px 4px;
    color:#5cb646;
    }
`

export const ContainerDados = styled.div `
    display:flex;
    justify-content:space-between;

    p{
    margin: 4px 8px 0 16px;
    font-size: 16px;
    font-weight: normal;
    letter-spacing: -0.39px;
    color:gray
    }
`;
