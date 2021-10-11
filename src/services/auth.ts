/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ISignInRequestData } from '../DTOs/AuthDTO'
import { v4 as uuid } from 'uuid'
import { api } from './api'

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount))

export async function signInResquest({ email, password }: ISignInRequestData) {
  delay()
  const response = await api.post('/auth/login', { email, password })
  return {
    token: 'aasxdadad',
    user: {
      name: 'Thiago Pereira',
      email: 'thiago.game@hotmail.com',
      avatar: 'https://github.com/tthiagoo.png'
    }
  }
}
export async function recoverUserInformation() {
  await delay()

  return {
    user: {
      name: 'Thiago Pereira',
      email: 'thiago.game@hotmail.com',
      avatar: 'https://github.com/tthiagoo.png'
    }
  }
}
