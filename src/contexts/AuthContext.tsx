/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Router from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { IAuthContext, ISignInData, IUser } from '../DTOs/AuthDTO'
import { recoverUserInformation, signInResquest } from '../services/auth'
import { api } from '../services/api'
const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<IUser | null>(null)

  const isAuthenticated = !!user

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies()

    if (token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ email, password }: ISignInData) {
    const { token, user } = await signInResquest({
      email,
      password
    })

    setCookie(undefined, 'nextauth.token', token, {
      maxAge: 60 * 60 * 1 // 1 hour
    })

    api.defaults.headers.Authorization = `Bearer ${token}`

    setUser(user)

    Router.push('/dashboard')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
