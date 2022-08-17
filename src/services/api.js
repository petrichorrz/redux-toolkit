import Axios from 'axios'
import LocalStorage from './storage'

const baseURL = process.env.REACT_APP_BASE_API_URL || 'https://localhost'
const api = Axios.create({ baseURL: baseURL })
api.interceptors.request.use(
  config => {
    const token = new LocalStorage('token').get()
    if (token) config.headers.Authorization = `Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default api
