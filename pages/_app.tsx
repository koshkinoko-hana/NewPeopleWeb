import React from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../global.css';
import theme from "../globalTheme";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
