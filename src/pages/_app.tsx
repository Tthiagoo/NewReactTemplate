import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { CustomThemeProvider } from '../contexts/ThemeContext'
import { appWithTranslation } from 'next-i18next'
import AuthProvider from '../contexts/AuthContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      <GlobalStyle />
    </CustomThemeProvider>
  )
}

export default appWithTranslation(MyApp)
