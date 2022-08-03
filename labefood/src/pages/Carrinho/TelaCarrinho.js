import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import backButton from '../../assets/back-button.png'
import { goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../global/GlobalContext';
import { useContext } from 'react'
import * as C from './styled'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'

const TelaCarrinho = () => {
    const { states, setters } = useContext(GlobalContext)
    const [carrinho, setCarrinho] = useState([])
    const navigate = useNavigate()

    console.log(states)

    return (
        <C.Container>
            <Header
                backButton={
                    <img
                        src={backButton}
                        onClick={() => goBack(navigate)}
                    />
                }
                name="Meu carrinho"
            />

            <C.Endereco>
                <h4>Endereço de Entrega </h4>
                <p>{states.profile.address}</p>
            </C.Endereco>

            <C.Carrinho>
                {
                    carrinho.length === 0 ? <div>Carrinho Vazio</div> :
                        carrinho.map((produtos, indice) => {
                            return (
                                <p>{produtos}</p>
                            )
                        })
                }
            </C.Carrinho>



            <Footer />
        </C.Container>
    )
}

export default TelaCarrinho