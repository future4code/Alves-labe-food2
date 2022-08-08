import React, { useContext, useEffect, useState } from 'react'
import * as C from './styled'
import Swal from 'sweetalert2'
import GlobalContext from '../../../global/GlobalContext'
import TelaCarrinho from '../../../pages/Carrinho/TelaCarrinho'

const CardCarrinho = (props) => {
    const { states, setters } = useContext(GlobalContext)
    const [carrinho, setCarrinho] = useState(states.carrinho)
    const [qntCarrinho, setQntCarrinho] = useState(props.indice)
   

    return (
        <C.ContainerCards>
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
                    <C.Indice>{props.indice}</C.Indice>
                </C.RetanguloIndice>
                <C.RetanguloBotao>
                    {/* {console.log(props.indice)} */}
                    <C.BotaoRemover onClick={props.onClick} >remover</C.BotaoRemover>
                </C.RetanguloBotao>
            </C.ContainerButton>
        </C.ContainerCards>
    )

}

export default CardCarrinho