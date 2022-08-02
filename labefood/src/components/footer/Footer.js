import React from 'react'
import { goToRestaurants, goToPerfil, goToShopCart } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import {  MainDiv } from './Styled'
import shoppingCart from '../../assets/shopping-cart.png'
import homePage from '../../assets/homepage.png'
import avatar from '../../assets/avatar.png'


export default function Footer() {
    const navigate = useNavigate()

    return (
        <MainDiv>
            <div>
                <button
                    onClick={() => goToRestaurants(navigate)}
                ><img src={homePage} /></button>
            </div>
            <div>
                <button
                    onClick={() => goToShopCart(navigate)}
                ><img src={shoppingCart} /></button>
            </div>
            <div>
                <button
                    onClick={() => goToPerfil(navigate)}
                ><img src={avatar} /></button>
            </div>
        </MainDiv>
    )
}
