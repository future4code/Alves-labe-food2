import React, {useEffect, useState }  from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import { goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import { TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";

const PaiDeTodos = styled.div`
display: grid;
`
const PaidaSessoes = styled.div`
grid-template-rows:100vh;
display: grid;
margin: 1px 20px 0px 16px;
align-items: center;
justify-content: center;
`
const Button = styled.button`
height: 45px;
width: 100%;
background-color: #65b153 ;
align-items: center;
justify-content: center;
border: none;
font-weight: bold;
`

const EditarEndereco = () => {
  const navigate = useNavigate()
  const [street, setStreet] = useState("")
  const [number, setNumber] = useState("")
  const [neighbourhood, setNeighbourhood] = useState("")
  const [city, setCity] = useState("")
  const [complement, setComplement] = useState("")
  const [state, setState] = useState("")

  const OnChangeStreet = (event) => {   
    setStreet( event.target.value )
  }
  const OnChangeNumber = (event) => {   
    setNumber( event.target.value )
  }
  const OnChangeNeighbourhood = (event) => {   
    setNeighbourhood( event.target.value )
  }
  const OnChangeCity = (event) => {   
    setCity( event.target.value )
  }
  const OnChangeState= (event) => {   
    setState( event.target.value )
  }
  const OnChangeComplement = (event) => {   
    setComplement( event.target.value )
  }
  const token = localStorage.getItem('token')

  function editar (event) {
  
    event.preventDefault()
    const url = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address"
    const body = {
      street: street,
      number: number,
      neighbourhood: neighbourhood,
      city: city,
      state: state,
      complement: complement
    }
    console.log(body)
    axios.put(url, body, {
      headers: {
        auth: token
      }
    }) .then ((res) => {
      console.log(res)
      navigate("/perfil")
    }).catch ((erro) => {
     console.log(erro)
    })
  }
   return (
      <PaiDeTodos>
        <Header
        backButton={<img onClick={() => goBack(navigate)} src={backButton}/>}
      name= "Editar Endereço"
        />
        <PaidaSessoes>
        <form onSubmit={editar}>
        <TextField
            name={"street"}
            label={"Logradouro"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            placeholder={"Rua / Av."}
            onChange={OnChangeStreet}
          />

          <TextField
            name={"number"}
            label={"Número"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"number"}
            placeholder={"Número"}
            onChange={OnChangeNumber}
          />

          <TextField
            name={"complement"}
            label={"Complemento"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            type={"text"}
            placeholder={"Apto. / Bloco"}
            onChange={OnChangeComplement}
          />

          <TextField
            name={"neighbourhood"}
            label={"Bairro"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            placeholder={"Bairro"}
            onChange={OnChangeNeighbourhood}
          />

          <TextField
            name={"city"}
            label={"Cidade"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            placeholder={"Cidade"}
            onChange={OnChangeCity}
          />

          <TextField
            name={"state"}
            label={"Estado"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            placeholder={"Estado"}
            onChange={OnChangeState}
          />
          <Button>Enviar</Button>

        </form>

        </PaidaSessoes>
        <Footer/>
  
      </PaiDeTodos>
    )
  }
  
  export default EditarEndereco