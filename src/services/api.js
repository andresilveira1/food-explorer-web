import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://food-explorer-api-573y.onrender.com',
  withCredentials: true,
})
