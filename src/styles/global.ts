import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    text-align: center;
    background: linear-gradient(to bottom, #6ab7f5, #fff);
    min-height: 100vh;
  }
  body, input, button {
    font-family: "Oxanium", sans-serif;
  }
`
