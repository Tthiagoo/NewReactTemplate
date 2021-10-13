import axios from 'axios'

const api = axios.create({
  baseURL: 'https://apishopping.leafdev.com.br'
})
export default api
