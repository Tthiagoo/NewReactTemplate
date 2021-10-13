export type IUser = {
  name: string
  email: string
  avatar: string
}

export interface IAuthContext {
  authenticated: boolean
  user: IUser

  signIn: (data: ISignInData) => Promise<void>
}
export interface ISignInRequestData {
  email: string
  password: string
  token?: string
}

export interface ISignInData {
  email: string
  password: string
}
