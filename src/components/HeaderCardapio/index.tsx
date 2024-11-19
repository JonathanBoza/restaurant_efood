import { useDispatch, useSelector } from 'react-redux'

import { open } from '../../store/reducers/Cart'
import { RootReducer } from '../../store'

import { TitleRed } from '../../stylos'
import { Image, ContainerHeader, VerRestaurantes } from './styles'

import bannerPerfil from '../../assets/image/banner.png'
import logo from '../../assets/image/logo.png'

const HeaderCardapio = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  return (
    <header>
      <Image style={{ backgroundImage: `url(${bannerPerfil})` }}>
        <div className="container">
          <ContainerHeader>
            <VerRestaurantes to="/">Restaurantes</VerRestaurantes>
            <img src={logo} />
            <TitleRed onClick={openCart}>
              {items.length} Produto(s) no carrinho
            </TitleRed>
          </ContainerHeader>
        </div>
      </Image>
    </header>
  )
}

export default HeaderCardapio
