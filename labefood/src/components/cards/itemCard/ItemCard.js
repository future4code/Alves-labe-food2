import React, { useContext } from 'react'
import { InfoDiv, MainDiv, RetanguloIndice, Indice, RetanguloBotaoAdd, RetanguloBotaoRem, BotaoRemover, ContainerButton, BotaoAdicionar } from './Styled'
import { MainDishesDiv } from '../../../pages/Restaurantes/TelaDetalhe/Styled'
import GlobalContext from '../../../global/GlobalContext'
import Swal from 'sweetalert2'


export default function ItemCard(props) {
  const { states, setters } = useContext(GlobalContext)
  console.log(states)

  const adicionarProduto = (product) => {

    Swal.fire({
      text: 'Selecione a quantidade desejada',
      input: 'select',
      inputOptions: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10
      },
      inputPlaceholder: 'Quantidade',
      inputValidator: (value) => {
        const newProduct = {
          ...product,
          quantity: value
        }
        setters.setCarrinho([...states.carrinho, newProduct])

      }
    })
  }
  const removerProduto = (id) => {
    if (id == states.carrinho.id) {

    }
  }

  const chooseButtons = (product, id) => {
    if (states.carrinho.length === 0) {
      return (
        <>
          <RetanguloBotaoAdd>
            <BotaoAdicionar
              onClick={() => adicionarProduto(product)}
            >adicionar</BotaoAdicionar>
          </RetanguloBotaoAdd>
        </>
      )
    } else {
      return (
        <>
          <RetanguloIndice>
            <Indice></Indice>
          </RetanguloIndice>
          <RetanguloBotaoRem>
            <BotaoRemover
              onClick={() => removerProduto(id)}
            >remover</BotaoRemover>
          </RetanguloBotaoRem>
        </>
      )
    }
  }

  return (
    <>
      {props.categories && props.categories?.map((element, i) => {
        return (
          <MainDishesDiv key={i}>
            <p>{element}</p>
            <hr />
            {props.products && props.products?.map((product) => {
              if (product.category == element) {
                return (
                  <MainDiv key={product.id}>
                    <div>
                      <img src={product.photoUrl} alt='Ilustração do alimento' />
                    </div>
                    <InfoDiv>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <h4>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
                      </InfoDiv>
                      <ContainerButton>
                        {chooseButtons(product, product.id)}
                      </ContainerButton>
                    
                  </MainDiv>
                )
              }
            })}
          </MainDishesDiv>
        )
      })}
    </>
  )
}
