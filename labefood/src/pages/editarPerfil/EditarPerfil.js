import React, {useEffect, useState }  from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import { goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import { TextField } from "@material-ui/core";

const PaiDeTodos = styled.div`
display: grid;
`

const PaidaSessoes = styled.div`
grid-template-rows:100%;
display: grid;
margin: 75px 20px 0px 16px;
`
const InputEdit = styled.input`
 width: 264px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: var(--black);
`

const EditarPerfil = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [cpf, setCpf] = useState("")

  const chamarName = (event) => {   //Serve para guarda as informações no estado
    setName( event.target.value )
  }
 const chamarEmail = (event) => {
    setEmail( event.target.value )
  }
  const chamarCpf = (event) => {
    setCpf(event.target.value)
  }

  const token = localStorage.getItem('token')
 
 
  useEffect (() => {

    editar()
  
  },[])
  
function editar () {
  const url = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile"
  const body = {
    name: name,
    email: email,
    cpf: cpf
  }
  axios.put(url, body, {
    headers: {
      auth: token
    }
  }) .then ((res) => {
    console.log(res)


   }).catch ((erro) => {
   console.log(erro)

   })
}
//axios não funciona
const navigate = useNavigate()
    return (
      <PaiDeTodos>
        <Header
        backButton={<img onClick={() => goBack(navigate)} src={backButton}/>}
      name= "Editar Perfil"
        />
        <PaidaSessoes>
        <form>

	              <TextField 
                           name={"name"}
                           label={"Nome"}
                           variant={"outlined"}
                           fullWidth
                           margin={"normal"}
                           required
                           type={"text"}
                           placeholder={"Nome e sobrenome"}
 
                 />

	              <TextField 
                name="email" 
                label={"E-mail"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"email"}
                placeholder={"email@email.com"}  />
			
	              <TextField 
                id='cpf' 
                name='cpf'   
                label={"CPF"}
                variant={"outlined"}
                fullWidth
                margin={"normal"}
                required
                type={"number"}
                placeholder={"000.000.000-00 (apenas números)"}
                inputProps={{ pattern: "^d{3}.d{3}.d{3}-d{2}$" }} />
                </form>

        </PaidaSessoes>
        <Footer/>
  
      </PaiDeTodos>
    )
  }
  
  export default EditarPerfil