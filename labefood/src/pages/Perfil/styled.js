import styled from 'styled-components'


export const PaiDeTodos = styled.div`
display: grid;
`

export const  PaidaSessoes = styled.div`
grid-template-rows: 108px, 76px, 100vh;
display: grid;
margin-top: 15%;
`


export const  CardPessoa = styled.section`
margin-top: 44px;
margin-left: 16px;
display: grid;
grid-template-columns: 85% 15% ;
`
export const  LetrasPessoa = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  margin: 8px 8px 0px 0px;
  
`
export const  Editor = styled.section`
display: flex;
align-items: center;
justify-content: center;
`
export const  ButtonEditor = styled.button`
background-color: rgba(255,255,255,.0);
border: none;
&:hover{
  background-color: #dcd7d3;
}
&:active{
  background-color: #7f7f7f;

}
`
export const H2Historico = styled.h2`
margin-left: 16px ;
font-size: 16px;
margin-top: 6px;
`
export const  Linha = styled.div`
    border: 1px solid black;
    margin: 8px 16px 0px 16px;
    background-color: black;
`
export const  CardEndereco = styled.div`
  height: 76px;
  background-color: #eee;
  display: grid;
  margin-top:16px;
  grid-template-columns: 85% 15%;
`

export const InfosEndereco = styled.div `
  display:flex;
  flex-direction:column;
  /* border:1px solid; */
  justify-content: center;
  margin-left: 16px;
`

export const  TituloEndereco = styled.h3`
  display:flex;
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: -0.39px;
  color: #bfbfbf;
  
`
export const  LetraEndereco = styled.p`
  display:flex;
  font-size: 16px;
  font-weight: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`
export const  CardHistoricoP = styled.p`
margin: 16px 16px 16px;
width: 328px;
height: 102px;
border: 1px solid #b8b8b8;
border-radius: 8px;
`
export const  TituloHistorico = styled.h2`
color:#5cb646;
margin:8px 16px 0px 16px;
font-size: 20px;
`
export const  DataEndereco = styled.div`
margin: 9px 16px 7px 16px;
font-size: 12px;
`
export const  Subtotal = styled.p`
font-size: 16px;
font-weight: bold;
margin: 7px 16px 0;
`