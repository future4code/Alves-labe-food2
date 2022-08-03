import React from 'react'
import { InfoDiv, MainDiv } from './Styled'

export default function ItemCard(props) {
  return (
    <MainDiv>
        <div>
            <img src={props.image} alt='Ilustração do alimento'/>
        </div>
        <InfoDiv>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h4>R${props.price}</h4>
        </InfoDiv>
        
    </MainDiv>
  )
}
