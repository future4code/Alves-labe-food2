
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../../global/GlobalContext';
import CardRestaurantes from '../../components/cardRestaurantes/CardRestaurantes';
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import InputBusca from '../../components/InputBusca/InputBusca';
import { goToBusca, goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import * as C from './styled'
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const TelaRestaurantes = (props) => {

  const { states, setters } = useContext(GlobalContext)
  const [resultadoBusca, setResultadoBusca] = useState("")
  const navigate = useNavigate()
  // console.log(states.restaurantes)

  const onChangeBusca = (e) => {
    setResultadoBusca(e.target.value)
  }
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

      <C.ContainerInput
        onClick={() => goToBusca(navigate)}>
        <InputBusca />
      </C.ContainerInput>

      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <Tabs centered>
          <Tab label="Mexicana" />
          <Tab label="Asiática" />
          <Tab label="Petiscos" />
          <Tab label="Carnes" />
          <Tab label="Sorvetes" />
          <Tab label="Árabe" onClick={true}/>
          <Tab label="Italiana" />
          <Tab label="Hamburguer" />
        </Tabs>
      </Box>

      <C.ContainerRestaurantes>
        {
          states.restaurantes.map((rest) => {
            
            return (
              <CardRestaurantes key={rest.id} restaurantes={rest} />
            )
          })
        } 
      </C.ContainerRestaurantes>

      <Footer />
    </C.Container>
  )
}

export default TelaRestaurantes