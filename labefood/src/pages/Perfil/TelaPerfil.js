import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import styled from 'styled-components'
import { Icon } from '@mui/material'
import Footer from '../../components/footer/Footer'
import Edit from "../../assets/edit.png"
import { style } from '@mui/system'

import restaurantImg from '../../assets/homepage.png'
import shoppingCartImg from '../../assets/shopping-cart.png'
import avatarImg from '../../assets/active-avatar.png'

import { useNavigate } from 'react-router-dom'
import { goBack, goToEditEndereco, goToEditPerfil } from '../../router/coordenator'



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
const LetrasPessoa = styled.p`
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
const Editor = styled.section`
display: flex;
align-items: center;
justify-content: center;
`
const ButtonEditor = styled.button`
background-color: rgba(255,255,255,.0);
border: none;
&:hover{
  background-color: #dcd7d3;
}
&:active{
  background-color: #7f7f7f;

}
`
const H2Historico = styled.h2`
margin-left: 16px ;
font-size: 16px;
margin-top: 6px;
`
const Linha = styled.div`
    border: 1px solid black;
    margin: 8px 16px 0px 16px;
    background-color: black;
`
const CardEndereco = styled.div`
  height: 76px;
  background-color: #eee;
  display: grid;
  margin-top:16px;
  grid-template-columns: 85% 15%;
`
const TituloEndereco = styled.h2`
  margin: 0 0 8px 16px;
  font-family: Roboto;
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--greyish);
  color: #bfbfbf;
`
const LetraEndereco = styled.p`
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
  margin: 16px 16px 0px 16px;
`
const CardHistoricoP = styled.p`
margin: 8px 16px 0pc 16px;
border: 1px solid green;
border-radius: 8px;
`
const TituloHistorico = styled.h2`
color:#5cb646;
margin:8px 16px 0px 16px;
font-size: 20px;
`
const DataEndereco = styled.h3`
margin: 9px 16px 7px 16px;
font-size: 12px;
`
const Subtotal = styled.h2`
font-size: 24px;
margin: 9px 16px 7px 16px;
`

const TelaPerfil = () => {
  const [dataTrip, setDataTrip] = useState([])
  const [inforTrip, setInforTrip] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    pegarPerfil()
    pegarHitorico()
  }, [])

  //const token = localStorage.getItem('token')
  //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Imo4RU1taGRUcVlzNllGVkpjb0duIiwibmFtZSI6IkJydW5hIiwiZW1haWwiOiJicnVuYXRlc3RlMUBtc24uY29tIiwiY3BmIjoiMTIxLjExMS4xMzEtMTEiLCJoYXNBZGRyZXNzIjp0cnVlLCJhZGRyZXNzIjoiUi4gQWZvbnNvIEJyYXosIDE3NywgNzEgLSBWaWxhIE4uIENvbmNpw6fDo28iLCJpYXQiOjE2NTk1MzM3MDF9.7lyecVc09ilJtMYHz9QB3xYxEcE6eRmnQGYFGNDpDOs"
  const token = localStorage.getItem('token')
  function pegarPerfil() {

 
  function pegarPerfil ()  {

    const url = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile"

    axios.get(url, {
      headers: {
        auth: token
      }

    })
      .then((res) => {
        setDataTrip(res.data.user)


      }).catch((erro) => {
        console.log(erro)

      })
  }
  }


  function pegarHitorico() {
    const urlH = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history"

    axios.get(urlH, {
      headers: {
        auth: token
      }

    })
      .then((res) => {
        setInforTrip(res.data)


      }).catch((erro) => {
        console.log(erro)

      })
  }
 

  console.log(inforTrip.orders)

  const card = inforTrip.orders?.map((orders, indice) => {



    return (
      <CardHistoricoP key={indice}>
        <TituloHistorico>{orders.restaurantName}</TituloHistorico>
        <DataEndereco>24.02.2024</DataEndereco>
        <Subtotal>Subtotal: {orders.totalPrice}</Subtotal>
      </CardHistoricoP>

    )

  })



  return (
    <PaiDeTodos>
      <Header

        backButton={<img src={backButton} />}
        name="Perfil"
      />
      <PaidaSessoes>
        <CardPessoa>
          <section >
            <LetrasPessoa>{dataTrip.name}</LetrasPessoa>
            <LetrasPessoa>{dataTrip.email}</LetrasPessoa>
            <LetrasPessoa>{dataTrip.cpf}</LetrasPessoa>
          </section>

          <Editor>
            <ButtonEditor type="button"> <img src={Edit} alt="Botão Editar perfil" /></ButtonEditor>
          </Editor>
        </CardPessoa>
        <CardEndereco>
          <section>
            <TituloEndereco>Endereço cadastrado</TituloEndereco>
            <LetraEndereco>{dataTrip.address}</LetraEndereco>
          </section>
          <Editor>
            <ButtonEditor type="button"> <img src={Edit} alt="Botão Editar endereço" /></ButtonEditor>
          </Editor>
        </CardEndereco>


        <H2Historico>Històrico de pedidos</H2Historico>
        <Linha />
        <div>
          {card}
        </div>
      </PaidaSessoes>
      <Footer
        restaurantImg={restaurantImg}
        shoppingCartImg={shoppingCartImg}
        avatarImg={avatarImg}
      />
    </PaiDeTodos>
  )
}

export default TelaPerfil