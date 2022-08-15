import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import { goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import { TextField } from "@material-ui/core";
import restaurantImg from '../../assets/homepage.png'
import shoppingCartImg from '../../assets/shopping-cart.png'
import avatarImg from '../../assets/active-avatar.png'
import Swal from 'sweetalert2'

import GlobalContext from '../../global/GlobalContext';

const PaiDeTodos = styled.div`
display: grid;
`

const PaidaSessoes = styled.div`
grid-template-rows:100%;
display: grid;
margin: 25% 20px 0px 16px;
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
const Button = styled.button`
height: 45px;
width: 100%;
background-color: #65b153 ;
align-items: center;
justify-content: center;
border: none;
font-weight: bold;
`


const EditarPerfil = () => {
  const navigate = useNavigate()
  const { states, setters } = useContext(GlobalContext)
  const [name, setName] = useState(states.profile.name)
  const [email, setEmail] = useState(states.profile.email)
  const [cpf, setCpf] = useState(states.profile.cpf)

  const chamarName = (event) => {   //Serve para guarda as informações no estado
    setName(event.target.value)
  }
  const chamarEmail = (event) => {
    setEmail(event.target.value)
  }
  const chamarCpf = (event) => {
    setCpf(event.target.value)
  }

  const token = localStorage.getItem('token')

  function editar(event) {

    event.preventDefault()
    const url = "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile"
    const body = {
      name: name,
      email: email,
      cpf: cpf
    }
    console.log(body)
    axios.put(url, body, {
      headers: {
        auth: token
      }
    }).then((res) => {
      setters.setProfile(res.data.user)
      navigate("/perfil")


    }).catch((erro) => {
      if(erro.response.request.status == 409) {
        Swal.fire('Email ou CPF já cadastrados')
      }

    })
  }

  return (
    <PaiDeTodos>
      <Header
        backButton={<img onClick={() => goBack(navigate)} src={backButton} />}
        name="Editar Perfil"
      />
      <PaidaSessoes>
        <form onSubmit={editar}>

          <TextField
            name={"name"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            placeholder={states.profile.name}
            type={"text"}
            onChange={chamarName}

          />

          <TextField
            name="email"
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"email"}
            placeholder={states.profile.email}
            onChange={chamarEmail} />

          <TextField
            name='cpf'
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"number"}
            placeholder={states.profile.cpf}
            mask="999.999.999-99"
            maskChar=" "
            inputProps={{ pattern: "^d{3}.d{3}.d{3}-d{2}$" }}
            onChange={chamarCpf}
            minLength={3} />
          <Button> Salvar</Button>
        </form>

      </PaidaSessoes>
      <Footer
        restaurantImg={restaurantImg}
        shoppingCartImg={shoppingCartImg}
        avatarImg={avatarImg}
      />

    </PaiDeTodos>
  )
}

export default EditarPerfil