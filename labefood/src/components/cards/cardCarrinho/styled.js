import styled from "styled-components"


export const ContainerCards = styled.div`
    width: 95%;
    display:flex;
    /* justify-content: space-between; */
    height: 20vh;
    border: 1px solid #b8b8b8;
    border-radius:10px;
    margin: 8px 16px;
`;

export const Imagem = styled.img `
    width:150px;
    height: 100%;
    object-fit: cover;
    border-top-left-radius:10px;
    border-bottom-left-radius:10px;
`;

export const Text = styled.div`
display: flex;
justify-content: center;
flex-direction:column;

`

export const Nome = styled.h3 `
    /* margin: 18px 16px 8px; */
    margin-left: 16px;
    font-size: 16px;
    font-weight: normal;
    color: #5cb646;
`;

export const Description = styled.p `
    font-size: 12px;
    margin: 8px 16px 4px;
    color: #b8b8b8;
`;

export const Price = styled.p`
    font-size: 16px;
    margin: 4px 8px 15px 16px;
`;

export const ContainerButton = styled.div `
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items: end;

`

export const RetanguloIndice = styled.div `
    width: 33px;
    display:flex;
    align-items:center;
    justify-content:center;
    height: 33px;
    margin: 0 0 11px 16px;
    /* padding: 5px; */
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border: 1px solid #5cb646;
`;

export const Indice = styled.p`
    color: #5cb646;
    font-size: 16px;
`

export const RetanguloBotao = styled.div `
    width: 90px;
    height: 31px;
    color: #e02020;
    border: 1px solid #e02020;
    display:flex;
    align-items:center;
    justify-content:center;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;

export const BotaoRemover = styled.button `
    color: #e02020;
    font-size: 12px;
    background-color: transparent;
    border:none;
    cursor:pointer;


`
