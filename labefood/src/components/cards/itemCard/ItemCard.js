
import React, { useContext, useEffect, useState } from 'react'

import * as C from './Styled'
import { ContainerCategorias } from '../../../pages/Restaurantes/TelaDetalhe/Styled'
import GlobalContext from '../../../global/GlobalContext'
import Swal from 'sweetalert2'
import { SettingsSystemDaydreamSharp } from '@mui/icons-material'
import ItemCard2 from './ItemCard2'


export default function ItemCard(props) {
  const { states, setters } = useContext(GlobalContext)
  const [valueButton, setValueButton] = useState(0)

  const adicionarProduto = (product) => {

    Swal.fire({
      text: 'Selecione a quantidade desejada',
      input: 'select',
      timer: 9000,
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
        const carrinhoLocal = [...states.carrinho, newProduct]
        localStorage.setItem('cart', JSON.stringify(carrinhoLocal))
      }
    })
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
        const novoCarrinho = states.carrinho.filter((product) => {
          return product.id !== id
        })
        setters.setCarrinho(novoCarrinho)
        Swal.fire({
          text: 'Produto removido!',
          showConfirmButton: false,
          timer: 1600
        })
      } else if (result.isDenied) {
        Swal.fire('Produto ainda está no carrinho')

      }
    })
  };

  return (
    <>
      {props.categories && props.categories?.map((element, i) => {
        return (
          <ContainerCategorias key={i}>
            <p>{element}</p>
            <hr />
            {props.products && props.products?.map((product) => {
              if (product.category == element) {
                return (
                  <C.MainDiv key={product.id}>
                    <div>
                      <img src={product.photoUrl} alt='Ilustração do alimento' />
                    </div>
                    <C.TextoProduto>
                      <h3>{product.name}</h3>
                      <p>{product.description}</p>
                      <h4>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h4>
                    </C.TextoProduto>
                    <C.ContainerButton>
                      <ItemCard2
                        removerProduto={() => removerProduto(product.id)}
                        adicionarProduto={() => adicionarProduto(product)}
                        productId={product.id}
                      />
                    </C.ContainerButton>

                  </C.MainDiv>
                )
              }
            })}
          </ContainerCategorias>
        )
      })}
    </>
  )
}
