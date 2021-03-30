import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.MIX_API_SERVER_URL,
})

export default apiClient
