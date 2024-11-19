import BannerImg from '../../assets/image/banner.png'
import LogoImg from '../../assets/image/logo.png'

import { Centralizar } from '../../stylos'
import * as S from './styles'

const Header = () => {
  return (
    <header>
      <S.Image style={{ backgroundImage: `url(${BannerImg})` }}>
        <div className="container">
          <Centralizar>
            <img src={LogoImg} alt="eFood" />
          </Centralizar>
          <Centralizar>
            <S.Title>
              Viva experiências gastronômicas no conforto da sua casa
            </S.Title>
          </Centralizar>
        </div>
      </S.Image>
    </header>
  )
}

export default Header
