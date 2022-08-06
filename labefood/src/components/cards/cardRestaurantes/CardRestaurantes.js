import React, { useContext,} from 'react'
import GlobalContext from '../../../global/GlobalContext';
import { useNavigate } from 'react-router-dom'
import { goToDetail } from '../../../router/coordenator'
import CardCarrinho from "../../../components/cards/cardCarrinho/CardCarrinho"
import * as C from './styled'

const CardRestaurantes = (props) => {
    const { states, setters } = useContext(GlobalContext)
    const navigate = useNavigate()

    const pegarId = (id) => {
        setters.setId(id)
        goToDetail(navigate, id)
      }
    
    return (
        <C.CardRestaurante onClick={() => pegarId(props.restaurantes.id)} >
            <img src={props.restaurantes.logoUrl} />
            <h3 color={"primary"}>{props.restaurantes.name} </h3>
            <C.ContainerDados>
                <p>{props.restaurantes.deliveryTime - Number(10)} - {props.restaurantes.deliveryTime} min</p>
                <p>Frete: R${props.restaurantes.shipping},00 </p>
            </C.ContainerDados>
        </C.CardRestaurante>
    )
}

export default CardRestaurantes