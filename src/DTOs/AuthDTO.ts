export type IUser = {
  name: string
  email: string
  avatar: string
}

export interface IAuthContext {
  authenticated: boolean
  user: IUser
  token: string
  signIn: (email, password) => Promise<void>
}
export interface ISignInRequestData {
  email: string
  password: string
}

export interface ISignInData {
  email: string
  password: string
}
