
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../global/GlobalContext';
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import InputBusca from './InputBusca/InputBusca';
import { goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'

import * as C from './styled'

const TelaRestaurantes = (props) => {

  const { states, setters } = useContext(GlobalContext)
  const [restaurantes, setRestaurantes] = useState([])
  const navigate = useNavigate()

  return (
    <C.Container>
      <Header
        backButton={
          <img
            src={backButton}
            onClick={() => goBack(navigate)}
          />
        }
        name="FutureEats"
      />

      <InputBusca />

      <C.ContainerRestaurantes>
        {/* {
          states.restaurantes.restaurants.map((rest) => {
            return (
              <C.CardRestaurante key={rest.id}>
                <img src={rest.logoUrl} />
                <h3 color={"primary"}>{rest.name} </h3>
                <C.ContainerDados>
                  <p>{rest.deliveryTime - Number(10)} - {rest.deliveryTime} min</p>
                  <p>Frete: R${rest.shipping},00 </p>
                </C.ContainerDados>
              </C.CardRestaurante>
            )
          })
        } */}
      </C.ContainerRestaurantes>

      <Footer />
    </C.Container>
  )
}

export default TelaRestaurantes