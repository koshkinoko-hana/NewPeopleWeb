import React from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../global.css';
import theme from "../globalTheme";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
    
    >div {
      background: rgba(255, 255, 255, 0.6);
      height: 100%;
    }
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
