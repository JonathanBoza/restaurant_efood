import styled from 'styled-components'
import { colors, Centralizar } from '../../stylos'

export const Rodape = styled.footer`
  background-color: ${colors.beige};
  height: 296px;
  margin-top: 40px;
`

export const LogoImg = styled(Centralizar)`
  padding-top: 40px;
`
export const RedeSocialImg = styled(Centralizar)`
  padding-top: 32px;

  img {
    padding: 0 4px;
  }
`

export const Descricao = styled(Centralizar)`
  p {
    font-size: 10px;
    color: ${colors.red};
    width: 480px;
    text-align: center;
    padding-top: 80px;
  }
`
