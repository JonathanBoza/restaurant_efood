import styled from 'styled-components'
import { colors } from '../../stylos'

export const Image = styled.div`
  width: 100%;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 64px;
  padding-bottom: 40px;
`

export const Title = styled.h1`
  color: ${colors.red};
  max-width: 539px;
  text-align: center;
  margin-top: 138px;
  font-size: 36px;
  font-weight: bold;
`
