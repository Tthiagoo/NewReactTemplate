import React from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'
import { CustomThemeProvider } from '../contexts/ThemeContext'
import { appWithTranslation } from 'next-i18next'
import { AuthProvider } from '../contexts/AuthContext'
import '../config/firebaseClient'
import Head from 'next/head'
import { FirebaseProvider } from '../contexts/FirebaseContext'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <CustomThemeProvider>
        <FirebaseProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </FirebaseProvider>
        <GlobalStyle />
      </CustomThemeProvider>
    </>
  )
}

export default appWithTranslation(MyApp)
