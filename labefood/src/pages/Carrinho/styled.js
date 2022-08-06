import styled from "styled-components"

export const Container = styled.section `
   display: flex;
   flex-direction:column;
   border:1px solid;
   height: auto;
`;

export const Endereco = styled.div `
   margin-top: 44px;
   height: 76px;
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

export const ContainerInfo = styled.div `
   /* border:1px solid; */
   display:flex;
   flex-direction:column;
   justify-content:center;
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

`





