import React, { useState, useContext, useEffect } from 'react'
import GlobalContext from '../../../global/GlobalContext'
import * as C from './Styled'


export default function ItemCard2(props) {
    const { states, setters } = useContext(GlobalContext)
    const [checarCarrinho, setChecarCarrinho] = useState([])

    useEffect(() => {
        const checar = states.carrinho && states.carrinho?.filter((item) => item.id === props.productId)
        setChecarCarrinho(checar)
    }, [states.carrinho])

    return (
        <>
            {checarCarrinho?.length == 0 ?
                <>
                    <div>
                    </div>
                    <C.RetanguloBotaoAdd>
                        <C.BotaoAdicionar
                            onClick={props.adicionarProduto}
                        >adicionar</C.BotaoAdicionar>
                    </C.RetanguloBotaoAdd>
                </>
                :
                <>
                    <C.RetanguloIndice>
                        <C.Indice>
                            {states.carrinho && states.carrinho?.map((product) => {
                                if (product.id === props.productId) {
                                    return (
                                        <>{product.quantity}</>
                                    )
                                } else {
                                    <>
                                    </>
                                }
                            })}
                        </C.Indice>
                    </C.RetanguloIndice>
                    <C.RetanguloBotaoRem>
                        <C.BotaoRemover
                            onClick={props.removerProduto}
                        >remover</C.BotaoRemover>
                    </C.RetanguloBotaoRem>
                </>
            }
        </>
    )
}
