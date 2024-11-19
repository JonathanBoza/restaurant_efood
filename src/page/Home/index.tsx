import ListaRestaurante from '../../components/ListaRestaurante'
import Header from '../../components/Header'

import { useGetRestaurantesQuery } from '../../services/api'
import Loader from '../../components/Loaders'

const Home = () => {
  const { data: restaurantes, isLoading: isLoadingRestaurantes } =
    useGetRestaurantesQuery()

  if (restaurantes) {
    return (
      <>
        <Header />
        <ListaRestaurante
          restaurantes={restaurantes}
          isLoading={isLoadingRestaurantes}
        />
      </>
    )
  }

  return <Loader />
}

export default Home
