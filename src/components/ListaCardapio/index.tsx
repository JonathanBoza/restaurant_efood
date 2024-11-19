import Cardapio from '../Cardapio'

import * as S from './styles'

export type Props = {
  cardapio: Prato[]
}

export const CardapioList = ({ cardapio }: Props) => {
  return (
    <div className="container">
      <S.ContainerCard>
        {cardapio.map((prato) => (
          <li key={prato.id}>
            <Cardapio
              nome={prato.nome}
              descricao={prato.descricao}
              foto={prato.foto}
              porcao={prato.porcao}
              preco={prato.preco}
              id={prato.id}
              prato={prato}
            />
          </li>
        ))}
      </S.ContainerCard>
    </div>
  )
}

export default CardapioList
