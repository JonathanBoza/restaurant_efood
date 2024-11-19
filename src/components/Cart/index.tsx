import { useDispatch, useSelector } from 'react-redux'

import Checkout from '../Checkout'
import { RootReducer } from '../../store'
import { close, remover, closeCartSidebar } from '../../store/reducers/Cart'
import { formataPreco, getPriceTotal } from '../../utils/index'

import * as S from './styles'

const Cart = () => {
  const { items, isOpen, openSidebar } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispatch = useDispatch()

  const irParaEntrega = () => {
    dispatch(closeCartSidebar())
  }

  const removeCart = (id: number) => {
    dispatch(remover(id))
  }

  const closeCart = () => {
    openSidebar ? dispatch(close()) : ''
  }

  const totalPrices = getPriceTotal(items)

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      {items.length > 0 ? (
        <S.Sidebar className={openSidebar ? 'is-visible' : ''}>
          <ul>
            {items.map((item) => (
              <S.CartItem key={item.id}>
                <img src={item.foto} alt={`Imagem do prato, ${item.nome}`} />
                <div>
                  <h3>{item.nome}</h3>
                  <p>{formataPreco(item.preco)}</p>
                </div>
                <button type="button" onClick={() => removeCart(item.id)} />
              </S.CartItem>
            ))}
          </ul>
          <S.ResumoPedido>
            Valor total: <span>{formataPreco(totalPrices)}</span>
          </S.ResumoPedido>
          <S.ButtonSidebar type="button" onClick={irParaEntrega}>
            Continuar com a entrega
          </S.ButtonSidebar>
        </S.Sidebar>
      ) : (
        <S.CartClear>
          <p>O carrinho está vazio</p>
          <p>adicione um produto para comprar!</p>
        </S.CartClear>
      )}
      <Checkout />
    </S.CartContainer>
  )
}

export default Cart
