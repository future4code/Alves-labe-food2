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
import CardCarrinho from '../../components/cards/cardCarrinho/CardCarrinho'

const TelaCarrinho = () => {
    const { states, setters } = useContext(GlobalContext)
    const [carrinho, setCarrinho] = useState(states.carrinho)
    const navigate = useNavigate()

    console.log(states.restaurantes)

    return (
        <C.Container >
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

            <C.ContainerInfo>
                {states.restaurantes.map((res) => {
                    if (res.id == states.id) {
                        // console.log(res)
                        return (
                            <div>
                                <C.Title>{res.name}</C.Title>
                                <C.Info>{res.address}</C.Info>
                                <C.Info>{res.deliveryTime - 10} - {res.deliveryTime}min</C.Info>
                            </div>
                        )
                    }
                })}
            </C.ContainerInfo>

            <C.Carrinho>
                {
                    states.carrinho.length === 0 ? <p>Carrinho Vazio</p> :
                        carrinho.map((produtos, indice) => {

                            return (
                                <CardCarrinho produtos={produtos} indice={indice + 1} />
                            )
                        })
                }
            </C.Carrinho>
            <Footer />
        </C.Container>
    )
}

export default TelaCarrinho