import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    -webkit-font-smoothing: antialiased;
    font-family: 'Nunito', sans-serif;
    line-height: 1.6;

    color: ${(props) => props.theme['base-text']};
  }

  h1 {
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    color: ${(props) => props.theme['base-subtitle']}
  }
`
