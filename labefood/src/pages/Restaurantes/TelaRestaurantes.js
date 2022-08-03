
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../global/GlobalContext';
// import axios from 'axios';
// import { BASE_URL } from '../../constants/url';
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import { goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'



const TelaRestaurantes = () => {

  const { states, setters } = useContext(GlobalContext)
  const [restaurantes, setRestaurantes] = useState([])
  const navigate = useNavigate()

  console.log(states)

  return (
    <div>
      <Header
        backButton={
          <img
            src={backButton}
            onClick={() => goBack(navigate)}
          />
        }
        name="Restaurante"
      />
      {/* {
        states.restaurantes.map((element) => {
          return (
            <div>
              {console.log(element)}
            </div>
          )
        })
      } */}
      <Footer />
    </div>
  )
}

export default TelaRestaurantes