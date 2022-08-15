import { BASE_URL } from "../constants/url"
import axios from "axios"
import Swal from "sweetalert2"
import GlobalContext from "../global/GlobalContext"
import { useContext } from "react"
import { goToRestaurants } from "../router/coordenator"

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

export const GetActiveOrder = () => {
    const { setters } = useContext(GlobalContext)
    axios.get(`${BASE_URL}/active-order`, {
        headers: {
            auth: localStorage.getItem('token')
        }
    }).then((res) => {
        setters.setPedidoFeito(res.data.order)
    }).catch((err) => {
        console.log(err)
    })
}

export const ConfirmOrder = (id, body, setOrder, navigate, setCarrinho) => {
    axios.post(`${BASE_URL}/restaurants/${id}/order`, body, {
        headers: {
            auth: localStorage.getItem('token')
        }
    }).then((res) => {
        setCarrinho([])
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
        if (err.response.status == 409) {
            return (Swal.fire({
                position: 'center',
                title: `Já existe um pedido em andamento`,
                showConfirmButton: false,
                timer: 2000
            }))
        } else if (err.response.status == 400) {
            return (
                Swal.fire({
                    position: 'center',
                    title: `Selecione a forma de pagamento`,
                    showConfirmButton: false,
                    timer: 2000
                })
            )
        }

    })
}