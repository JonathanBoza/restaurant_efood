import styled from 'styled-components'
import { colors } from '../../stylos'

export const Image = styled.div`
  width: 100%;
  height: 280px;
  filter: brightness(50%);
  background-repeat: no-repeat;
  background-size: cover;
`

export const ContainerBanner = styled.div`
  position: relative;
`

export const TagBanner = styled.p`
  font-size: 32px;
  font-weight: 100;
  color: ${colors.white};
  position: absolute;
  bottom: 222px;
`

export const TitleBanner = styled.h1`
  font-size: 32px;
  color: ${colors.white};
  position: absolute;
  bottom: 32px;
`
