import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://json-server-vercel-self-three.vercel.app/',
})
