import React from 'react'
import { goToRestaurants, goToPerfil, goToShopCart } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import {  MainDiv } from './Styled'
import shoppingCart from '../../assets/shopping-cart.png'
import homePage from '../../assets/homepage.png'
import avatar from '../../assets/avatar.png'


export default function Footer(props) {
    const navigate = useNavigate()

    return (
        <MainDiv>
            <div>
                <button
                    onClick={() => goToRestaurants(navigate)}
                ><img src={props.restaurantImg} /></button>
            </div>
            <div>
                <button
                    onClick={() => goToShopCart(navigate)}
                ><img src={props.shoppingCartImg} /></button>
            </div>
            <div>
                <button
                    onClick={() => goToPerfil(navigate)}
                ><img src={props.avatarImg} /></button>
            </div>
        </MainDiv>
    )
}
