import React, { useContext, useEffect, useState } from 'react'
import Clock from '../../../assets/clock.svg'
import GlobalContext from '../../../global/GlobalContext'
import { GetActiveOrder } from '../../../services/restaurants'
import * as C from './styled'

const CardPedido = (props) => {
  return (
    <C.Container>
      <div>
        <img src={Clock} />
      </div>
      <C.ContainerInfo>
        <h4>Pedido em andamento</h4>
        <p>{props.name}</p>
        <p><b>SUBTOTAL: {props.price?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</b></p>
      </C.ContainerInfo>
    </C.Container>
  )
}

export default CardPedido