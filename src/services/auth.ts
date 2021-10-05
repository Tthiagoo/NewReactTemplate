/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ISignInRequestData } from '../DTOs/AuthDTO'
import { v4 as uuid } from 'uuid'

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount))

export async function signInResquest(data: ISignInRequestData) {
  await delay()
  return {
    token: 'adadde2323',
    user: {
      name: 'Thiago Pereira',
      email: 'thiago.game@hotmail.com',
      avatar: 'https://github.com/tthiagoo.png'
    }
  }
}
