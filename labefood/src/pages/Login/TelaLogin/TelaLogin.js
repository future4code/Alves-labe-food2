// import { RestorePageOutlined } from '@mui/icons-material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignUp } from '../../../router/coordenator'
import LogoLogin from "../../../assets/logo-future-eats-invert.png";
import { ScreenContainer, FormContainer, NewContainer, ButtonNew, LoginButton, ImgLogin} from './Styled'
import { TextField } from "@material-ui/core";

const TelaLogin = () => {
  const navigate =  useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const OnChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const OnChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const OnSubmitLogin = (event) => {
    event.preventDefault()
    const body = {
      email: email,
      password: password
    };
    console.log(body)
    axios.post("https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/login", body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      console.log(response)
      navigate("/restaurantes")
      if (response.data.user.hasAddress === true) {
        navigate("/restaurantes")} else {navigate("/signup")}
        }).catch((erro) => {
      console.log(erro.message)
      alert("Usuário incorreto ou não exite!!")
    })
  }

  return (
    <ScreenContainer>
          <ImgLogin src={LogoLogin} />
        <h4>Entrar</h4>
        <form onSubmit={OnSubmitLogin}>
        <FormContainer>
          <TextField
          value={email}
          onChange={OnChangeEmail}
          type='email'
          label={"Email"}
          variant={"outlined"}
          margin={"normal"}
          placeholder={"email@email.com"} />
          <TextField
          value={password}
          onChange={OnChangePassword}
          type='password'
          label={"Senha"}
          variant={"outlined"}
          margin={"normal"}
          placeholder={"Minimo 6 caracteres"}
          />
          <LoginButton> Entrar </LoginButton>
        </FormContainer>
          </form>

        <NewContainer>
        <h4> Não Possui cadastro?</h4>
        <ButtonNew onClick={() => goToSignUp(navigate,"/signup" )} > Clique Aqui</ButtonNew>
        </NewContainer>
      

    </ScreenContainer>

  )
}

export default TelaLogin