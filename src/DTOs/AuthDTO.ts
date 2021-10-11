export interface IUser {
  name: string
  email: string
  avatar: string
}

export interface ISignInData {
  email: string
  password: string
}

export interface IAuthContext {
  isAuthenticated: boolean
  user: IUser
  signIn: (data: ISignInData) => Promise<void>
}
export type ISignInRequestData = {
  email: string
  password: string
}
