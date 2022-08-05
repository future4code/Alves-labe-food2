import React, {useEffect, useState }  from 'react'
import axios from 'axios'
import Header from '../../components/header/Header'
import backButton from '../../assets/back-button.png'
import styled from 'styled-components'
import Footer from '../../components/footer/Footer'
import { goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'

const PaiDeTodos = styled.div`
display: grid;
`

const PaidaSessoes = styled.div`
grid-template-rows:100vh;
display: grid;
margin: 75px 20px 0px 16px;
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
                  <div>
                  <label for="nome"></label>
	                <input type='text' id='nome' name='nome'  placeholder="Seu nome" required />
                  </div>
                  <label for="email"></label>
	              <input name="email" id="email" />
			
                  <div>
                  <label for="cpf"></label>
	                <input type='cpf' id='cpf' name=''  placeholder="" required />
                  </div>
                </form>

        </PaidaSessoes>
        <Footer/>
  
      </PaiDeTodos>
    )
  }
  
  export default EditarEndereco