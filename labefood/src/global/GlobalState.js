import GlobalContext from "./GlobalContext";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import { useState, useEffect } from "react";
import { Login, Signup } from "../services/user";
import { GetRestaurants, GetRestaurantDetail } from "../services/restaurants";

const GlobalState = (props) => {
    const [restaurantes, setRestaurantes] = useState([])
    // const [restauranteDetalhe, setRestauranteDetalhe] = useState([])

    useEffect(() => {
        axios.get(`${BASE_URL}/restaurants`, {
            headers: {
                auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImlNY2lRQVRDcUMwZUdGWm5KSUlkIiwibmFtZSI6Ik1pY2hlbGxlIiwiZW1haWwiOiJtaWNoZWxsZWRhcm9zYUBnbWFpbC5jb20iLCJjcGYiOiI3NjUuODc2Ljk0NS0zNCIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NTk0NjExMDd9.H1JwODe3GfT_8cLIihz233Hk-05AekDySrMmCERdLLo"
            }
        })
            .then((res) => {
                setRestaurantes(res.data.restaurants)
                // console.log(res.data.restaurants)
            }).catch((err) => {
                console.log(err)
            })

    }, [])

    // console.log(restaurantes)

    const states = { restaurantes }
    const setters = { setRestaurantes }

    return (
        <GlobalContext.Provider value={{ states, setters }}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState