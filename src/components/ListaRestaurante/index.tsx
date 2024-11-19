import Card from '../Restaurante'

import { ContainerGrid } from './styles'

export type Props = {
  restaurantes?: Restaurante[]
  isLoading: boolean
}

const ListaRestaurante = ({ restaurantes }: Props) => {
  const getRestauranteTag = (restaurantes: Restaurante) => {
    const tags = []

    if (restaurantes.tipo) {
      tags.push(restaurantes.tipo)
    }

    return tags
  }

  return (
    <div className="container">
      <ContainerGrid>
        {restaurantes &&
          restaurantes.map((restaurantes) => (
            <li key={restaurantes.id}>
              <Card
                title={restaurantes.titulo}
                avaliation={restaurantes.avaliacao}
                description={restaurantes.descricao}
                cover={restaurantes.capa}
                type={getRestauranteTag(restaurantes)}
                highlighted={restaurantes.destacado}
                id={restaurantes.id}
              />
            </li>
          ))}
      </ContainerGrid>
    </div>
  )
}

export default ListaRestaurante
