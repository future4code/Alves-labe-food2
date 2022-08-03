import GlobalContext from "./GlobalContext";
import axios from "axios";
import { useState, useEffect } from "react";
import { Login, Signup } from "../services/user";
import { GetRestaurants, GetRestaurantDetail } from "../services/restaurants";

const GlobalState = (props) => {
    const [restaurantes, setRestaurantes] = useState([])
    const [restauranteDetalhe, setRestauranteDetalhe] = useState([])

    useEffect(() => {
        axios.get(`https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setRestaurantes(res.data)
                console.log(res.data)
            }).catch((err) => {
                console.log(err.response)
            })
    }, [])

    const states = { restaurantes, restauranteDetalhe }
    const setters = { setRestaurantes, setRestauranteDetalhe }
    
    console.log(restaurantes)

    return (
        <GlobalContext.Provider value={{states, setters}}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState