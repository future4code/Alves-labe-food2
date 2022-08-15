import styled from "styled-components"

export const Container = styled.section `
   display: flex;
   flex-direction:column;
   width: 100%;
   margin-top: 25%;

/* Phone */
@media screen and (max-width:414px) {
   width: 100%;
}

/* Tablet */
@media screen and (min-width:415px) and (max-width:912px) {
    max-width: 912px ;
    margin:auto;
}

/* Desktop */
@media screen and (min-width:913px) {
    width: 400px ;
    /* border: solid 1px #aaa; */
}
`;

export const Endereco = styled.div `
   height: 11vh;
   background-color:#eeeeee;

   h4{
      margin: 8px 16px;
      font-size: 16px;
      color: #b8b8b8
   }

   p{
      margin: 0 16px;
      font-size: 16px;
      color: black;
      font-weight: bold;
   }
`;

export const Carrinho = styled.div`
   width:100%;
   display:flex;
   flex-direction: column;
   justify-content: center;
   align-items:center;
`;

export const CarrinhoVazio = styled.div `
   margin: 20px;
`

export const ContainerInfo = styled.div `
   /* border:1px solid; */
   display:flex;
   flex-direction:column;
   justify-content:center;
   flex-wrap:wrap;
   height: auto;
`

export const Title = styled.p `
   color: #5cb646;
   font-size: 16px;
   margin: 16px 16px 8px;

`

export const Info = styled.p `
   color: #b8b8b8;
   font-size: 16px;
   margin: 8px 16px;

`;

export const ContainerFretePreco = styled.div `
   display:flex;
   flex-direction:column;
`

export const Frete = styled.p `
   text-align: right;
   margin-right: 20px;
`

export const SubTotal = styled.div`
   display:flex;
   justify-content: space-between;
   margin: 5px 20px;
   align-items: center;
`

export const Valor = styled.p`
   font-size: 18px;
   font-weight: bold;
   color: #5cb646;
`

export const ContainerPagamento = styled.div `
   margin: 10px 16px 15%;

   p{
      font-size: 16px;
      margin-bottom: 5px;
   }

`

export const CheckBox = styled.div`
   margin-top: 10px;
   /* flex-direction:column;
   display:flex; */

   label{
      margin-left: 10px;
   }

`

export const Button = styled.button `
   display:flex;
   align-items: center;
   justify-content: center;
   align-self:center;
   width: 328px;
   height: 42px;
   font-size: 16px;
   background-color: #5cb646;
   border: none;
   cursor:pointer;

   margin-bottom: 25%;

`






