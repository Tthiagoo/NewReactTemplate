/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { IAuthContext, ISignInData, IUser } from '../DTOs/AuthDTO'
import { recoverUserInformation, signInResquest } from '../services/auth'
const AuthContext = createContext({} as IAuthContext)

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null)

  const authenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      console.log('revoerrr')
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    } else {
      console.log('nao chamou o recover')
    }
  }, [])

  const signIn = ({ email, password }: ISignInData) => {
    const { token, user } = signInResquest({ email, password })
    console.log('chamou')

    setUser(user)
    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1 // 1 hour
    })

    console.log(email, password)
    Router.push('/dashboard')
  }
  return (
    <AuthContext.Provider value={{ authenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
