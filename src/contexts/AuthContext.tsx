/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { IAuthContext, ISignInData, IUser } from '../DTOs/AuthDTO'
import api from '../services/api'
import { recoverUserInformation, signInResquest } from '../services/auth'
const AuthContext = createContext({} as IAuthContext)

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null)

  const authenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      console.log('recoverrr')
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    } else {
      console.log('nao chamou o recover')
    }
  }, [])

  async function signIn({ email, password }: ISignInData) {
    try {
      const { token, user } = await signInResquest({
        email,
        password
      })

      setCookie(undefined, 'nextauth.token', token, {
        maxAge: 60 * 60 * 1 // 1 hour
      })

      api.defaults.headers.Authorization = `Bearer ${token}`

      setUser(user)

      Router.push('/profile')
    } catch (error) {
      alert(error)
    }
  }
  return (
    <AuthContext.Provider value={{ authenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  )
}
