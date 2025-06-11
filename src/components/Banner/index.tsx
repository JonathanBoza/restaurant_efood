import * as S from './styles'

export type Props = {
  restaurante: Restaurante
}

const Banner = ({ restaurante }: Props) => {
  return (
    <div>
      <S.Image style={{ backgroundImage: `url(${restaurante.capa})` }} />
      <S.ContainerBanner className="container">
        <S.TagBanner>{restaurante.tipo}</S.TagBanner>
        <S.TitleBanner>{restaurante.titulo}</S.TitleBanner>
      </S.ContainerBanner>
    </div>
  )
}

export default Banner
