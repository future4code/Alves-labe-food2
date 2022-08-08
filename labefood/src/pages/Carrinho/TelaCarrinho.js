import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import backButton from '../../assets/back-button.png'
import { goBack } from '../../router/coordenator'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../../global/GlobalContext';
import { useContext } from 'react'
import * as C from './styled'
import { BASE_URL } from '../../constants/url'
import axios from 'axios'
import CardCarrinho from '../../components/cards/cardCarrinho/CardCarrinho'
import restaurantImg from '../../assets/homepage.png'
import shoppingCartImg from '../../assets/active-shopping-cart.png'
import avatarImg from '../../assets/avatar.png'
import Swal from 'sweetalert2'
import { ConfirmOrder } from '../../services/restaurants'


const TelaCarrinho = () => {
    const { states, setters } = useContext(GlobalContext)
    const [carrinho, setCarrinho] = useState(states.carrinho)
    const [qntCarrinho, setQntCarrinho] = useState(Number)
    const [frete, setFrete] = useState(0)
    const [price, setTotalPrice] = useState(0)
    const [pagamento, setPagamento] = useState("")
    const [order, setOrder] = useState([])
   


    const navigate = useNavigate()

    const onChangeMoney = (e) => {
        setPagamento(e.target.value)
    }

    const onChangeCard = (e) => {
        setPagamento(e.target.value)
    }

    // console.log(states.pedidoFeito)

    const confirmarPedido = () => {
        states.carrinho.map((product) => {
            const produto = {
                "products": [{
                    "id": product.id,
                    "quantity": product.quantity,
                }],
                "paymentMethod": pagamento
            }

            return (
                ConfirmOrder(states.id, produto, setOrder, setters.setPedidoFeito, navigate)
            )

        })

    }

    const removerProduto = (id, quantidade ) => {
        Swal.fire({
            title: 'Tem certeza que quer remover esse produto do seu carrinho?',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            confirmButtonText: 'Sim'
        }).then((result) => {
            if (result.isConfirmed) {
                carrinho?.map((product, index) => {
                    let qntCarrinho = product.quantity
                    if(qntCarrinho >= 1 ) {
                        setters.setCarrinho(product.quantity - 1)
                        setQntCarrinho(product.quantity - 1)
                        console.log(carrinho)
                    } else {
                        carrinho.splice(index);
                        console.log(index)
                        setters.setCarrinho(carrinho)
                    }

                })
            } else if (result.isDenied) {
                Swal.fire('Produto ainda está no carrinho')

            }
        })
    };



    useEffect(() => {

        states.restaurantes.map((res) => {
            if (res.id == states.id) {
                setFrete(res.shipping)
            }
        })

        let totalPrice = 0
        if (states.carrinho.length > 0) {
            states.carrinho.forEach(element => {
                totalPrice = totalPrice + element.price * element.quantity
                const subTotal = totalPrice + frete
                setTotalPrice(subTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }))
            });
        }
    }, [states.carrinho])


    return (
        <C.Container >
            <Header
                backButton={
                    <img
                        src={backButton}
                        onClick={() => goBack(navigate)}
                    />
                }
                name="Meu carrinho"
            />

            <C.Endereco>
                <h4>Endereço de Entrega </h4>
                <p>{states.profile.address}</p>
            </C.Endereco>

            <C.ContainerInfo>
                {states.restaurantes.map((res) => {
                    if (res.id == states.id) {

                        return (
                            <div>
                                <C.Title>{res.name}</C.Title>
                                <C.Info>{res.address}</C.Info>
                                <C.Info>{res.deliveryTime - 10} - {res.deliveryTime}min</C.Info>
                            </div>
                        )
                    }
                })}
            </C.ContainerInfo>

            <C.Carrinho>
                {
                    states.carrinho.length === 0 ? <C.CarrinhoVazio>Carrinho Vazio</C.CarrinhoVazio> :
                        carrinho?.map((produtos, indice) => {

                            return (
                                <>
                                    <CardCarrinho produtos={produtos} indice={produtos.quantity} onClick={() => removerProduto(produtos.id, qntCarrinho)} />
                                </>
                            )
                        })
                }
            </C.Carrinho>

            <C.ContainerFretePreco>
                <C.Frete>Frete: {frete.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</C.Frete>
                <C.SubTotal>
                    <p>SUBTOTAL</p>
                    <C.Valor>{price}</C.Valor>
                </C.SubTotal>
            </C.ContainerFretePreco>


            <C.ContainerPagamento>
                <p>Forma de Pagamento</p>
                <hr />

                <C.CheckBox>
                    <input type="radio" name="pagamento" id="dinheiro" value="money" onChange={onChangeMoney} />
                    <label htmlFor="dinheiro">Dinheiro</label>
                </C.CheckBox>

                <C.CheckBox>
                    <input type="radio" name="pagamento" id="cartao" value="cardcredit" onChange={onChangeCard} />
                    <label htmlFor="cartao-de-credito">Cartão de Crédito</label>
                </C.CheckBox>

            </C.ContainerPagamento>

            <C.Button type='submit' onClick={() => confirmarPedido()}>Confirmar</C.Button>

            <Footer
                restaurantImg={restaurantImg}
                shoppingCartImg={shoppingCartImg}
                avatarImg={avatarImg}
            />
        </C.Container>
    )
}

export default TelaCarrinho