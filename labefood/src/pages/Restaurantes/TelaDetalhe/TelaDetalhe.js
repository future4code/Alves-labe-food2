import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/header/Header'
import { goBack } from '../../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import backButton from '../../../assets/back-button.png'
import GlobalContext from '../../../global/GlobalContext'
import { BASE_URL } from '../../../constants/url'
import ItemCard from '../../../components/cards/itemCard/ItemCard'
import { MainDiv, InfoDiv, DetailsDiv, MainDishesDiv, ShippingDiv } from './Styled'

import axios from 'axios'


export default function TelaDetalhe() {
    const { states } = useContext(GlobalContext)
    const [productCategory, setProductCategory] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getDetails()

    }, [])
    //APENAS PARA ESTRUTURAÇÃO
    const [details, setDetails] = useState([])
    // useEffect(() => {
    //     const categories = details.products?.map((product) => product.category)
    //     const newCategories = categories?.filter((product, i) => {
    //         return newCategories.indexOf(product) === i
    //     })
    //     setProductCategory(newCategories)
    // }, [details])
    const getDetails = () => {
        axios.get(
            `${BASE_URL}/restaurants/1`, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMzZ0pYa01Gb3FJd21YV1BpRExlIiwibmFtZSI6IlZpY3RvciIsImVtYWlsIjoidmljdG9yTGVAZnV0dXJlNC5jb20iLCJjcGYiOiIxMTEuNTQ2LjI1Ni00NCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTk0NjI0NjB9.jKqwtomLRmOUpSi9UGY9_j4hwZ_PryEJG2YsrAfSC6s"
            }
        }
        ).then((response) => {
            setDetails(response.data.restaurant)
        }).catch((error) => {
            console.log(error)
        })
    }
    //APENAS PARA ESTRUTURAÇÃO

    // console.log(productCategory)

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
                    {details.products.map((product) => {
                        return (
                            <MainDishesDiv>
                                <h4>{product.category}</h4>
                                <hr />
                                <ItemCard
                                    key={product.id}
                                    image={product.photoUrl}
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                />
                            </MainDishesDiv>
                        )
                    })
                    }
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
