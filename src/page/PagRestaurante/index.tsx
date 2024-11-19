import { useParams } from 'react-router-dom'

import HeaderCardapio from '../../components/HeaderCardapio'
import CardapioList from '../../components/ListaCardapio'
import Banner from '../../components/Banner'

import { useGetMenuQuery } from '../../services/api'
import Loader from '../../components/Loaders'

type RestauranteParams = {
  id: string
}

const PagRestaurante = () => {
  const { id } = useParams() as RestauranteParams
  const { data: restaurante } = useGetMenuQuery(id)

  if (!restaurante) {
    return <Loader />
  }
  return (
    <>
      <HeaderCardapio />
      <Banner restaurante={restaurante} />
      <CardapioList cardapio={restaurante.cardapio} />
    </>
  )
}

export default PagRestaurante
