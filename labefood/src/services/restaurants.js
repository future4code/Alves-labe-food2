import { BASE_URL } from "../constants/url"
import axios from "axios"

export const GetRestaurants = (setRestaurantes) => {
    axios.get(`${BASE_URL}/restaurants`, {
        headers: {
            auth: localStorage.getItem('token')
        }
      })
        .then((res) => {
            setRestaurantes(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response)
        })
}

export const GetRestaurantDetail = (id, setRestauranteDetalhe) => {
    axios.get(`${BASE_URL}/restaurants/${id}`, {
        headers: {
            auth: localStorage.getItem('token')
        }
      })
        .then((res) => {
            setRestauranteDetalhe(res.data.results)
            console.log(res.data.results)
        }).catch((err) => {
            console.log(err.response)
        })
}