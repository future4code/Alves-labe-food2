import GlobalContext from "./GlobalContext";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import { useState, useEffect } from "react";
import { Login, Signup } from "../services/user";
import { GetRestaurants, GetRestaurantDetail } from "../services/restaurants";

const GlobalState = (props) => {
    const [restaurantes, setRestaurantes] = useState([])
    const [profile, setProfile] = useState([])
    const [id, setId] = useState([])
    const [carrinho, setCarrinho] = useState([])

    useEffect((restaurantId) => {
       axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth:localStorage.getItem('token')
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
                auth:localStorage.getItem('token')
                // auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlNY2lRQVRDcUMwZUdGWm5KSUlkIiwibmFtZSI6Ik1pY2hlbGxlIiwiZW1haWwiOiJtaWNoZWxsZWRhcm9zYUBnbWFpbC5jb20iLCJjcGYiOiI3NjUuODc2Ljk0NS0zNCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTk0NjExMDd9.H1JwODe3GfT_8cLIihz233Hk-05AekDySrMmCERdLLo"
            }
        }).then((res) => {
            setProfile(res.data.user)
            // console.log(res.data.user)
        }).catch((err) => {
            console.log(err)
        })

    },[])

    const states = { restaurantes, profile, id, carrinho}
    const setters = { setRestaurantes, setProfile, setId, setCarrinho }

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState