import React, { useContext, useEffect, useState } from 'react'
import * as C from './styled'
import Swal from 'sweetalert2'
import GlobalContext from '../../../global/GlobalContext'
import TelaCarrinho from '../../../pages/Carrinho/TelaCarrinho'

const CardCarrinho = (props) => {
    const { states, setters } = useContext(GlobalContext)
    const [carrinho, setCarrinho] = useState(states.carrinho)
    const [qntCarrinho, setQntCarrinho] = useState(props.indice)
    useEffect(() => {
        refesh()
    }, [carrinho])

    const refesh = () => {
        return (
            <>
                <div>
                    <C.Imagem src={props.produtos.photoUrl} />
                </div>
                <C.Text>
                    <C.Nome>{props.produtos.name}</C.Nome>
                    <C.Description>{props.produtos.description}</C.Description>
                    <C.Price>{props.produtos.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</C.Price>
                </C.Text>
                <C.ContainerButton>
                    <C.RetanguloIndice>
                        <C.Indice>{qntCarrinho}</C.Indice>
                    </C.RetanguloIndice>
                    <C.RetanguloBotao>
                        {/* {console.log(props.indice)} */}
                        <C.BotaoRemover onClick={() => removerProduto(props.produtos.id, props.produtos.quantity)}>remover</C.BotaoRemover>
                    </C.RetanguloBotao>
                </C.ContainerButton>
            </>
        )
    }

    const removerProduto = (id, indice_product) => {
        Swal.fire({
            title: 'Tem certeza que quer remover esse produto do seu carrinho?',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            showCancelButton: true,
            confirmButtonText: 'Sim'
        }).then((result) => {
            if (result.isConfirmed) {
                const novoCarrinho = carrinho.filter((product) => {
                    return product.id !== id
                })
                setters.setCarrinho(novoCarrinho)
                Swal.fire({
                    text: 'Produto removido!',
                    showConfirmButton: false,
                    timer: 1600
                })
                // carrinho?.map((product, i) => {
                //     carrinho.splice(i, i + 1);

                //     // if (qntCarrinho >= 1) {
                //     //     setQntCarrinho(product.quantity - 1);
                //     //     setters.setCarrinho(product.quantity - 1)
                //     // } else {
                //     //     carrinho.splice(indice_product, 1);
                //     //     setCarrinho(carrinho?.filter(item => id !== item.id))
                //     //     setQntCarrinho(carrinho.length)
                //     // }
                // })

            } else if (result.isDenied) {
                Swal.fire('Produto ainda está no carrinho')

            }
        })
    };

    return (
        <C.ContainerCards>
            {refesh()}
        </C.ContainerCards>
    )

}

export default CardCarrinho