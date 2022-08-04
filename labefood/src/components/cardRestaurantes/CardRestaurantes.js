import React from 'react'
import * as C from './styled'

const CardRestaurantes = (props) => {
    // console.log(props.restaurantes)
    return (
        <C.CardRestaurante >
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