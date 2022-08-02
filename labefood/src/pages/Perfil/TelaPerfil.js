import React, {useEffect} from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import styled from 'styled-components'

const PaiDeTodos = styled.div`
display: grid;
`

const PaidaSessoes = styled.div`
grid-template-rows: 108px, 76px, 100vh;
display: grid;
`


const CardPessoa = styled.section`
margin-top: 44px;
margin-left: 16px;
display: grid;
grid-template-columns: 85% 15% ;
`
const LetrasPessoa =styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  margin: 16px 16px 0px 0px;
`
const Editor = styled.section`
display: flex;
align-items: center;
justify-content: center;
`
const H2Historico = styled.h2`
text-decoration: underline;
`
const Linha = styled.div`
    border: 1px solid black;
    margin: 16px 16px 16px 16px;
    background-color: black;
`
const TelaPerfil = () => {
  const token = localStorage.getItem('token')
  function pegarPerfil ()  {
    const url = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA"

    axios.get(url, {
      headers: {
        auth: token 
      }
  
     })
     .then ((res) => {
      console.log(res)
 
     }).catch ((erro) => {
      console.log(erro)
  
     })
  }
  useEffect (() => {
    pegarPerfil()
  
  },[])
  

  return (
    <PaiDeTodos>
      <Header
      backButton={<img src={backButton}/>}
    name= "Perfil"
      />
      <PaidaSessoes>
      <CardPessoa>
        <section>
        <LetrasPessoa> teste{pegarPerfil.name}</LetrasPessoa>
        <LetrasPessoa> teste{pegarPerfil.email}</LetrasPessoa>
        <LetrasPessoa> teste{pegarPerfil.cpf}</LetrasPessoa>
        </section>
        <Editor>
          <p>L</p>
        </Editor>  
      </CardPessoa>
      <div>
        <section>
        <h2>Endereço cadastrado</h2>  
        <p>teste{pegarPerfil.addrees}</p>
        </section>
        <section>
          <p>L</p>
        </section>  
        <H2Historico>històrico de pedidos</H2Historico>
        <Linha />
      </div>

      <div>
        <section>
          <h2>Nameteste</h2>
          <h3>DataTeste</h3>
          <h2>Subtotal</h2>

        </section>
        </div>
      </PaidaSessoes>

    </PaiDeTodos>
  )
}

export default TelaPerfil