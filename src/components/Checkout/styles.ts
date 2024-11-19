import styled from 'styled-components'
import { colors } from '../../stylos'
import Sidebar from '../Sidebar'

export const TitleForm = styled.h2`
  font-size: 16px;
  color: ${colors.beige};
  margin-bottom: 16px;
`

export const Forms = styled.form`
  margin-bottom: 24px;
`

export const ContainerEntrega = styled(Sidebar)`
  display: none;
  width: 100%;

  > div {
    display: flex;

    &.invisible {
      display: none;
    }
  }

  .dflex {
    display: flex;
    width: 100%;
    justify-content: space-between;

    div {
      width: 152px;

      input {
        width: 100%;
      }
    }
  }

  &.is-visible {
    display: block;
  }
`

export const LabelGroup = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.beige};
`

export const InputGroup = styled.div`
  input {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    background-color: ${colors.beige};
    border: none;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .numberCart {
    display: flex;
    justify-content: space-between;
  }

  &.error {
    border: 3px solid red;
  }
`

export const NumberCard = styled.div`
  width: 224px;
`
export const CardCode = styled.div`
  width: 86px;
`

export const ContainerPagamento = styled(Sidebar)`
  display: none;

  input {
    width: 100%;
  }
  .numberCart {
    display: flex;
    justify-content: space-between;
  }

  .expiresCard {
    display: flex;
    justify-content: space-between;

    div {
      width: 152px;
    }
  }

  &.is-visible {
    display: block;
  }
`

export const ContainerConfirmação = styled(Sidebar)`
  div {
    margin-bottom: 24px;
  }

  &.is-visible {
    display: block;
  }

  p {
    font-size: 14px;
    line-height: 22px;
    margin-top: 16px;
    color: ${colors.beige};
  }
`

export const Container = styled.div``
