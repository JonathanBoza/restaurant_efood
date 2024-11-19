import styled, { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  beige: '#FFEBD9',
  lightBeige: '#FFF8F2',
  darkBackground: '#000000CC',
  white: 'rgba(255, 255, 255, 1)',
  black: '#000'
}

export const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }

  body {

    background-color: ${colors.lightBeige};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Centralizar = styled.div`
  display: flex;
  justify-content: center;
`

export const TitleRed = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.red};
`
