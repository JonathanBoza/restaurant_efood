import logo from '../../assets/image/logo.png'
import instagram from '../../assets/image/instagram.png'
import facebook from '../../assets/image/facebook.png'
import twitter from '../../assets/image/twitter.png'

import * as S from './styles'

const Footer = () => {
  return (
    <S.Rodape>
      <div className="container">
        <S.LogoImg>
          <img src={logo} />
        </S.LogoImg>
        <S.RedeSocialImg>
          <img src={instagram} />
          <img src={facebook} />
          <img src={twitter} />
        </S.RedeSocialImg>
        <S.Descricao>
          <p>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado.
          </p>
        </S.Descricao>
      </div>
    </S.Rodape>
  )
}

export default Footer
