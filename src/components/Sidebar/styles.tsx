import styled from 'styled-components'
import { colors } from '../../stylos'

export const SidebarComponents = styled.aside`
  display: none;
  max-width: 360px;
  width: 100%;
  padding: 40px 16px 0 16px;
  background-color: ${colors.red};
  color: ${colors.beige};
  z-index: 1;

  h4 {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: bold;
  }
`
