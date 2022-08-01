import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import { goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'

const TelaRestaurantes = () => {
  const navigate = useNavigate()
  
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
      TelaRestaurantes
      <Footer />
    </div>
  )
}

export default TelaRestaurantes