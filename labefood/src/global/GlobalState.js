import GlobalContext from "./GlobalContext";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import { useState, useEffect } from "react";
import { Login, Signup } from "../services/user";
import { GetRestaurants, GetRestaurantDetail } from "../services/restaurants";
import CardPedido from '../components/cards/cardPedidoFeito/CardPedido'

const GlobalState = (props) => {
    const [restaurantes, setRestaurantes] = useState([])
    const [profile, setProfile] = useState([])
    const [id, setId] = useState([])
    const [carrinho, setCarrinho] = useState([])
    const [pedidoFeito, setPedidoFeito] = useState([])
    var cardPedido
    useEffect(() => {
        
        if (states.pedidoFeito.length !== 0) {
            return cardPedido = <CardPedido />
        }
    

       axios.get(`${BASE_URL}/restaurants`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    })
            .then((res) => {
                setRestaurantes(res.data.restaurants)
                // console.log(res.data.restaurants)
            }).catch((err) => {
                console.log(err)
            })

        axios.get(`${BASE_URL}/profile`, {
                headers: {
                    auth: localStorage.getItem('token')
                }
            }).then((res) => {
                setProfile(res.data.user)
                // console.log(res.data.user)
            }).catch((err) => {
                console.log(err)
            })

    }, [])

const states = { restaurantes, profile, id, carrinho, pedidoFeito }
const setters = { setRestaurantes, setProfile, setId, setCarrinho, setPedidoFeito }

return (
    <GlobalContext.Provider value={{ states, setters }}>
        {props.children}
    </GlobalContext.Provider>
)
}
export default GlobalState