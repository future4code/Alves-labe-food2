// import { RestorePageOutlined } from '@mui/icons-material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToSignUp } from '../../../router/coordenator'



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
      if (response.data.user.hasAddress === true) {
        navigate("/home")} else {navigate("/signup")}
        }).catch((erro) => {
      console.log(erro.message)
    })
  }

  return (
    <div>
      <h4>Entrar</h4>
        <form onSubmit={OnSubmitLogin}>
          <input
          value={email}
          onChange={OnChangeEmail}
          type='email'></input>
          <input
          value={password}
          onChange={OnChangePassword}
          type='password'></input>
          <button> Entrar </button>
        </form>
      <h4> Não Possui cadastro?</h4> <button onClick={() => goToSignUp(navigate,"/signup" )} > Clique Aqui</button>

    </div>
  )
}

export default TelaLogin