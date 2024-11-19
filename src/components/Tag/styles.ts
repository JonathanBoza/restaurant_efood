import styled from 'styled-components'

import { Props } from './index'

import { colors } from '../../stylos'

export const TagContainer = styled.div<Props>`
  padding: 8px;
  font-size: ${(Props) => (Props.size === 'small' ? '12px' : '14px')};
  background-color: ${colors.red};
  display: inline-block;
  color: ${colors.lightBeige};
  margin-right: 8px;
`
