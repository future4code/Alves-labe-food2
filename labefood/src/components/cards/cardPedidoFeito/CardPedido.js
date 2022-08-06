import React from 'react'
import Clock from '../../../assets/clock.svg'
import * as C from './styled'

const CardPedido = (props) => {
  return (
    <C.Container>
        <img src={Clock} />
        <div>
            <h4>Pedido em andamento</h4>
            {/* <p>{props}</p> */}
        </div>
    </C.Container>
  )
}

export default CardPedido