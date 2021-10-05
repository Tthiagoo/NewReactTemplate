/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { createContext, useContext, useState } from 'react'
import { IAuthContext, ISignInData, IUser } from '../DTOs/AuthDTO'
import { signInResquest } from '../services/auth'
const AuthContext = createContext({} as IAuthContext)

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }): JSX.Element {
  const [user, setUser] = useState<IUser | null>(null)
  const [token, setToken] = useState('')

  const authenticated = !!user

  const signIn = async ({ email, password }: ISignInData) => {
    const { token, user } = await signInResquest({ password, email })
    setToken(token)
    setUser(user)
  }
  return (
    <AuthContext.Provider value={{ authenticated, signIn, user, token }}>
      {[children]}
    </AuthContext.Provider>
  )
}
