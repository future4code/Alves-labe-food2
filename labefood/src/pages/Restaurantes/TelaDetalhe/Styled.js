import styled from "styled-components";

export const MainDiv = styled.div`
    display: flex;
    flex-direction:column;
    width: auto;
    overflow:hidden;
    margin-top: 15%;
`
export const ContainerTelaDetalhe = styled.div`
    padding-top: 61px;
    display: grid;
    justify-items: center;
    gap:16px;
    
`
export const InfoRestaurante = styled.div`
    display: flex;
    flex-direction:column;
    gap: 8px;
    width: 328px;

    img{
        width: 328px;
        height: 120px;
        object-fit: cover;
        border-top-left-radius:12px;
        border-top-right-radius:12px;
    }
    h5{
        color: #5cb646;
        font-size: 16px;
    }
    p{
        color: #b8b8b8;
        font-size: 16px;
       
    }
`
export const ContainerFrete = styled.div`
    display: flex;
    p{
        width: 104px;
    }
`

export const ContainerProdutos = styled.div `
    overflow-y: auto;
    ::-webkit-scrollbar {
        display: none;
    }

`

export const ContainerCategorias = styled.div`
    display: grid;
    gap: 8px;
    width: 328px;
    margin: 10px 16px 9%;
    /* border:1px solid; */

    p{
        margin: 16px 16px 8px;
        font-size: 16px;
    }
    
`