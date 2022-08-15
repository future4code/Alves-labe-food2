import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { goBack } from '../../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import backButton from '../../../assets/back-button.png'
import GlobalContext from '../../../global/GlobalContext'
import { BASE_URL } from '../../../constants/url'
import ItemCard from '../../../components/cards/itemCard/ItemCard'
import * as C from './Styled'
import { SettingsPowerSharp } from '@material-ui/icons'
import { GetRestaurantDetail } from '../../../services/restaurants'

import Swal from 'sweetalert2'
import restaurantImg from '../../../assets/active-homepage.png'
import shoppingCartImg from '../../../assets/shopping-cart.png'
import avatarImg from '../../../assets/avatar.png'



export default function TelaDetalhe() {
    const { states, setters } = useContext(GlobalContext)
    const [productCategory, setProductCategory] = useState([])
    const navigate = useNavigate()
    const [details, setDetails] = useState([])

    // console.log(details.products)

    useEffect(() => {
        GetRestaurantDetail(states.id, setDetails)
    }, [])

    useEffect(() => {
        const categories = details.products && details.products?.map((product) => product.category);
        const newCategories = categories?.filter((item, i) => {
            return categories.indexOf(item) === i;
        });
        setProductCategory(newCategories);
    }, [details]);

    const chooseScreen = () => {
        if (details.length === 0) {
            return <h1>Carregando</h1>
        } else {
            return (
                <C.ContainerTelaDetalhe>
                    <C.InfoRestaurante>
                        <img alt="restaurante" src={details.logoUrl} />
                        <h5>{details.name}</h5>
                        <p>{details.category}</p>
                        <C.ContainerFrete>
                            <p>{details.deliveryTime - 10} - {details.deliveryTime} min</p>
                            <p>Frete {details.shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        </C.ContainerFrete>
                        <p>{details.address}</p>
                    </C.InfoRestaurante>

                    <C.ContainerProdutos>
                        <ItemCard
                            categories={productCategory}
                            products={details.products}
                        />
                       
                    </C.ContainerProdutos>
                </C.ContainerTelaDetalhe >
            )
        }
    }

    return (
        <C.MainDiv>
            <Header
                backButton={
                    <img
                        src={backButton}
                        onClick={() => goBack(navigate)}
                    />
                }
                name="Restaurante"
            />
            {chooseScreen()}

            <Footer 
            restaurantImg={restaurantImg}
            shoppingCartImg={shoppingCartImg}
            avatarImg={avatarImg}/>
        </C.MainDiv>
    )
}
