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
margin: 60px 20px 0px 16px;
align-items: center;
justify-content: center;
`
const Button = styled.button`
height: 45px;
width: 80%;
background-color: #65b153 ;
align-items: center;
justify-content: center;
`




const EditarEndereco = () => {
    const navigate = useNavigate()
    return (
      <PaiDeTodos>
        <Header
        backButton={<img onClick={() => goBack(navigate)} src={backButton}/>}
      name= "Editar Endereço"
        />
        <PaidaSessoes>
        <form>
        <TextField
            name={"street"}
            label={"Logradouro"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            required
            type={"text"}
            placeholder={"Rua / Av."}
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
          />

          <TextField
            name={"complement"}
            label={"Complemento"}
            variant={"outlined"}
            fullWidth
            margin={"normal"}
            type={"text"}
            placeholder={"Apto. / Bloco"}
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
          />
          <Button>Enviar</Button>

        </form>

        </PaidaSessoes>
        <Footer/>
  
      </PaiDeTodos>
    )
  }
  
  export default EditarEndereco