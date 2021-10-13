import axios, { AxiosInstance } from 'axios'

import { parseCookies } from 'nookies'
export function getAPIClient(ctx?: unknown): AxiosInstance {
  const { 'nextauth.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://apishopping.leafdev.com.br'
  })

  api.interceptors.request.use(config => {
    console.log(config)

    return config
  })

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  return api
}
