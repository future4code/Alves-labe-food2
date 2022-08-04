import React from 'react'
import * as C from './styled'

const CardCarrinho = (props) => {
    // console.log(props.produtos)

    return (
        <C.ContainerCards>
            <div>
                <C.Imagem src={props.produtos.photoUrl} />
            </div>
            <C.Text>
                <C.Nome>{props.produtos.name}</C.Nome>
                <C.Description>{props.produtos.description}</C.Description>
                <C.Price>R${props.produtos.price}</C.Price>
            </C.Text>
            <C.ContainerButton>
                <C.RetanguloIndice>
                    <C.Indice>{props.indice}</C.Indice>
                </C.RetanguloIndice>
                <C.RetanguloBotao>
                    <C.BotaoRemover>remover</C.BotaoRemover>
                </C.RetanguloBotao>
            </C.ContainerButton>
        </C.ContainerCards>
    )

}

export default CardCarrinho