import styled from 'styled-components'
import { colors } from '../../stylos'

export const CardCardapio = styled.div`
  width: 320px;
  padding: 8px;
  background-color: ${colors.red};
  color: ${colors.beige};
`

export const ImageCard = styled.div`
  padding-bottom: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }
`

export const Title = styled.h2`
  font-size: 16px;

  padding-bottom: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  padding-bottom: 8px;
`

export const BotaoCard = styled.button`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.red};
  background-color: ${colors.beige};
  padding: 4px 8px;
  width: 100%;
  border: none;
  cursor: pointer;
`

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  color: ${colors.beige};

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  background-color: ${colors.red};
  width: 1024px;
  height: 344px;
  position: relative;
  padding: 32px;
  z-index: 1;

  > img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    display: flex;
    cursor: pointer;
  }

  h3 {
    font-size: 18px;

    padding-bottom: 16px;
  }
`

export const ImageModal = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const BotaoModal = styled(BotaoCard)`
  width: 218px;
`

export const DescriptionModal = styled.div`
  margin-left: 32px;

  ${Descricao} {
    line-height: 22px;
  }

  span {
    display: block;
    margin-top: 24px;
  }
`
