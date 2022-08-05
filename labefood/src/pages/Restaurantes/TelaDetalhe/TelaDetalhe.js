import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import Footer from '../../../components/footer/Footer'
import { goBack } from '../../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import backButton from '../../../assets/back-button.png'
import GlobalContext from '../../../global/GlobalContext'
import { BASE_URL } from '../../../constants/url'
import ItemCard from '../../../components/cards/itemCard/ItemCard'
import { MainDiv, InfoDiv, DetailsDiv, MainDishesDiv, ShippingDiv, ContainerCategorias } from './Styled'
import axios from 'axios'
import { SettingsPowerSharp } from '@material-ui/icons'
import { GetRestaurantDetail } from '../../../services/restaurants'
import Swal from 'sweetalert2'


export default function TelaDetalhe() {
    const { states, setters } = useContext(GlobalContext)
    const [productCategory, setProductCategory] = useState([])
    const navigate = useNavigate()
    const [details, setDetails] = useState([])

    // console.log(details.products)

    useEffect(() => {
        GetRestaurantDetail(states.id, setDetails)

    }, [])

    // useEffect(() => {
    //     const categories = details.products &&  details.products.map((product) => product.category)
    //     const newCategories = categories?.filter((product, i) => {
    //         // console.log(product)
    //         return newCategories.indexOf(product) === i
    //     })
    //     setProductCategory(newCategories)
    // }, [productCategory])
    // useEffect(() => {
    //     const categories =
    //       cardProducts && cardProducts.map((product) => product.category);
    //     const newCategories = categories?.filter((item, i) => {
    //       return categories.indexOf(item) === i;
    //     });
    //     setCategories(categories);
    //   }, [cardProducts]);

    const asdsa = (e) => {
        console.log(e.target.value)
    }

    const adicionarProduto = (product) => {

        Swal.fire({
            text: 'Selecione a quantidade desejada',
            input: 'select',
            onChange: { asdsa },
            inputOptions: {
                1: 1,
                2: 2,
                3: 3,
                4: 4,
                5: 5,
                6: 6,
                7: 7,
                8: 8,
                9: 9,
                10: 10
            },
            inputPlaceholder: 'Quantidade',
            inputValidator: (value) => {
                const newProduct = {
                    ...product,
                    quantity: value
                }
                setters.setCarrinho([...states.carrinho, newProduct])

            }
        })
    }
    console.log(states.carrinho)

    const chooseScreen = () => {
        if (details.length === 0) {
            return <h1>Carregando</h1>
        } else {
            return (
                <DetailsDiv>


                    <InfoDiv>
                        <img alt="restaurante" src={details.logoUrl} />
                        <h5>{details.name}</h5>
                        <p>{details.category}</p>
                        <ShippingDiv>
                            <p>{details.deliveryTime} - {details.deliveryTime + 10} min</p>
                            <p>Frete {details.shipping.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
                        </ShippingDiv>
                        <p>{details.address}</p>
                    </InfoDiv>

                    <ContainerCategorias>
                        {details.products.map((product) => {
                            return (
                                <MainDishesDiv key={product.id}>
                                    <h4>{product.category}</h4>
                                    <hr />
                                    <ItemCard
                                        key={product.id}
                                        image={product.photoUrl}
                                        name={product.name}
                                        description={product.description}
                                        price={product.price}
                                    />
                                    <button onClick={() => adicionarProduto(product)}>Adicionar ao Carrinho</button>
                                </MainDishesDiv>
                            )
                        })
                        }
                    </ContainerCategorias>
                </DetailsDiv >
            )
        }
    }

    return (
        <MainDiv>
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
        </MainDiv>
    )
}
