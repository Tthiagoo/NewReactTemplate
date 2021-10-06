/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ISignInRequestData } from '../DTOs/AuthDTO'
import { v4 as uuid } from 'uuid'

const delay = (amount = 750) =>
  new Promise(resolve => setTimeout(resolve, amount))

export function signInResquest(data: ISignInRequestData) {
  delay()

  return {
    token: 'cookieeee',
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
