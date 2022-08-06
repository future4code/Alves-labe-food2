import { BASE_URL } from "../constants/url"
import axios from "axios"
import Swal from "sweetalert2"


export const GetRestaurants = (restaurantes, setRestaurantes) => {
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
            setRestauranteDetalhe(res.data.restaurant)
        }).catch((err) => {
            console.log(err.response)
        })
}

export const ConfirmOrder = (id, body, setOrder, navigate) => {
    axios.post(`${BASE_URL}/restaurants/${id}/order`, body,  {
        headers: {
            auth: localStorage.getItem('token')
        }
    }).then((res) => {
        console.log(res.data)
        setOrder(res.data.order)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Seu pedido foi feito com sucesso `,
            showConfirmButton: false,
            timer: 1500
          })
        navigate("/restaurantes")

    }).catch((err) => {
        console.log(err)
        navigate("/restaurantes")
    })
}