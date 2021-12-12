import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {font-family: 'Lato', sans-serif;}
  a { cursor: pointer; text-decoration: none; }
`
