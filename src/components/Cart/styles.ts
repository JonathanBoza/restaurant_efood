import styled from 'styled-components'

import { colors } from '../../stylos'
import { SidebarComponents } from '../Sidebar/styles'

import excluir from '../../assets/image/excluir.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: none;
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.black};
  opacity: 0.55;
`
export const Sidebar = styled(SidebarComponents)`
  &.is-visible {
    display: block;
  }
`

export const TitleSidebar = styled.h2`
  font-size: 16px;
  color: ${colors.beige};
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${colors.beige};
  position: relative;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    margin-top: 8px;
    color: ${colors.red};
    font-size: 18px;
  }

  p {
    margin-top: 16px;
    color: ${colors.red};
    font-size: 14px;
  }

  button {
    background-image: url(${excluir});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
  }
`

export const ResumoPedido = styled.p`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: ${colors.beige};
`

export const ButtonSidebar = styled.button`
  max-width: 100%;
  width: 100%;
  cursor: pointer;
  padding: 4px;
  margin-top: 16px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.beige};
  color: ${colors.red};
  border: none;
`

export const BackCart = styled.div`
  display: flex;

  &.is-visible {
    display: none;
  }
`

export const CartClear = styled.div`
  background-color: ${colors.red};
  z-index: 1;
  width: 360px;
  padding-top: 24px;

  p {
    color: ${colors.beige};
    font-size: 18px;
    text-align: center;
    line-height: 26px;
  }
`
