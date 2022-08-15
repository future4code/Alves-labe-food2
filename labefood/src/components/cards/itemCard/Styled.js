import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    border: solid #b8b8b8 1px;
    border-radius:8px;
    width: 328px;
    min-height: 112px;
    max-height: 113px;
    word-wrap: normal;
    margin: 10px 0 10px;

    img{
        width: 96px;
        height: 112px;
        border-bottom-left-radius: 8px;
        border-top-left-radius: 8px;
        object-fit:cover;
    }
`

export const TextoProduto = styled.div`
    display: flex;
    justify-content: center;
    flex-direction:column;
    border:1px solid transparent;

    h3{
        color: #5cb646;
    }

    p{
        margin:0;
        color: #b8b8b8;
        font-size: 12px;
    }
`
export const RetanguloIndice = styled.div`
    width: 33px;
    display:flex;
    align-items:center;
    justify-content:center;
    height: 33px;
    margin: 0 0 11px 16px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 1px solid #5cb646;
    p{
        text-align: center;

    }
`;

export const Indice = styled.p`
    display:flex;
    align-items:center;
    justify-content:center;
    color: #5cb646;
    font-size: 16px;
    text-align: center;
`
export const RetanguloBotaoRem = styled.div`
    width: 90px;
    height: 31px;
    color: #e02020;
    border: 1px solid #e02020;
    display:flex;
    align-items:center;
    justify-content:center;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
`
export const RetanguloBotaoAdd = styled.div`
    width: 90px;
    height: 31px;
    color: #e02020;
    border: 1px solid #5cb646;
    display:flex;
    align-items:center;
    justify-content:center;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
`

export const BotaoRemover = styled.button`
    color: #e02020;
    font-size: 12px;
    background-color: transparent;
    border:none;
    cursor:pointer;
`
export const BotaoAdicionar = styled.button`
    color: #5cb646;
    font-size: 12px;
    background-color: transparent;
    border:none;
    cursor:pointer;
`
export const ContainerButton = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-between; 
    align-items: end;
    /* border: 1px solid; */
`