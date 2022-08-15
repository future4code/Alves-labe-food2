import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import Footer from '../../components/footer/Footer'
import Edit from "../../assets/edit.png"
import * as C from './styled'

import restaurantImg from '../../assets/homepage.png'
import shoppingCartImg from '../../assets/shopping-cart.png'
import avatarImg from '../../assets/active-avatar.png'

import { useNavigate } from 'react-router-dom'
import { goBack, goToEditEndereco, goToEditPerfil } from '../../router/coordenator'



const TelaPerfil = () => {
  const [perfil, setPerfil] = useState([])
  const [restaurantes, setRestaurantes] = useState([])
  const [data, setData] = useState(new Date())
  const navigate = useNavigate()

  useEffect(() => {
    pegarPerfil()
    pegarHitorico()
  }, [])

  
  const token = localStorage.getItem('token')

  function pegarPerfil() {

    const url = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile"

    axios.get(url, {
      headers: {
        auth: token
      }

    })
      .then((res) => {
        setPerfil(res.data.user)


      }).catch((erro) => {
        console.log(erro)

      })
  }


  function pegarHitorico() {
    const urlH = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/orders/history"

    axios.get(urlH, {
      headers: {
        auth: token
      }

    })
      .then((res) => {
        setRestaurantes(res.data)


      }).catch((erro) => {
        console.log(erro)

      })
  }


  const card = restaurantes.orders?.map((orders, indice) => {



    return (
      <C.CardHistoricoP key={indice}>
        <C.TituloHistorico>{orders.restaurantName}</C.TituloHistorico>
        <C.DataEndereco>{data.getDate()}/{data.getMonth()}/{data.getFullYear()}</C.DataEndereco>
        <C.Subtotal>Subtotal: {orders.totalPrice.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</C.Subtotal>
      </C.CardHistoricoP>

    )

  })



  return (
    <C.PaiDeTodos>
      <Header
        backButton={<img src={backButton} onClick={() => goBack(navigate)}  />}
        name="Perfil"
      />

      <C.PaidaSessoes>
        <C.CardPessoa>
          <section >
            <C.LetrasPessoa>{perfil.name}</C.LetrasPessoa>
            <C.LetrasPessoa>{perfil.email}</C.LetrasPessoa>
            <C.LetrasPessoa>{perfil.cpf}</C.LetrasPessoa>
          </section>

          <C.Editor>

            <C.ButtonEditor type="button"> <img src={Edit} onClick={() => goToEditPerfil(navigate)} alt="Botão Editar perfil" /></C.ButtonEditor>

          </C.Editor>
        </C.CardPessoa>
        <C.CardEndereco>
          <C.InfosEndereco>
            <C.TituloEndereco>Endereço cadastrado</C.TituloEndereco>
            <C.LetraEndereco>{perfil.address}</C.LetraEndereco>
          </C.InfosEndereco>
          <C.Editor>
            <C.ButtonEditor type="button"> <img src={Edit} onClick={() => goToEditEndereco(navigate)} alt="Botão Editar endereço" /></C.ButtonEditor>
          </C.Editor>
        </C.CardEndereco>


        <C.H2Historico>Histórico de pedidos</C.H2Historico>
        <C.Linha />
        <div>
          {card}
        </div>
      </C.PaidaSessoes>
      <Footer
        restaurantImg={restaurantImg}
        shoppingCartImg={shoppingCartImg}
        avatarImg={avatarImg}
      />
    </C.PaiDeTodos>
  )
}

export default TelaPerfil