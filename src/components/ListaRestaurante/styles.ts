import styled from 'styled-components'

import { colors } from '../../stylos'

export const ContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  padding-top: 80px;
  color: ${colors.red};
`
