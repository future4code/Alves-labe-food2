import styled from "styled-components";

export const MainDiv = styled.div`
    display: grid;
    grid-template-columns: 96px 232px;
    border: solid #b8b8b8 1px;
    border-radius:8px;
    
    width: 328px;
    height: 112px;
    word-wrap: normal;

    img{
        width: 96px;
        height: 112px;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        object-fit:cover;
    }
`

export const InfoDiv = styled.div`
    display: grid;
    padding: 18px;
    h3{
        color: #5cb646;
    }
    p{
        color: #b8b8b8;
        font-size: 12px;
    }
`