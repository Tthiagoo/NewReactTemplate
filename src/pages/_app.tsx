import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { CustomThemeProvider } from '../contexts/ThemeContext'
const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CustomThemeProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </CustomThemeProvider>
  )
}

export default MyApp
