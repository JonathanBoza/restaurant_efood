import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from '../../stylos'

export const Card = styled.div`
  max-width: 472px;
  heigth: 398px;
  border: 1px solid ${colors.red};
  position: relative;
  margin-bottom: 48px;
`
export const Capa = styled.img`
  width: 100%;
  height: 216px;
  object-fit: cover;
`

export const Container = styled.div`
  padding: 8px;

  .containerTitle {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`

export const Nota = styled.div`
  width: 55px;
  heigth: 21px;
  display: flex;
  align-items: center;

  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`
export const TagImg = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const BotaoSaibaMais = styled(Link)`
  font-size: 14px;
  padding: 4px 6px;
  text-decoration: none;
  color: ${colors.beige};
  background-color: ${colors.red};
`
