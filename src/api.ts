import axios from 'axios'
import { useAuthStore } from '@/stores/auth.store.ts'

export const API_ROUTES = {
  profile: 'profile',
  categories: 'categories',
  bookmarks: {
    get: (id: number) => `categories/${id}/bookmarks`,
    delete: (id: number) => `bookmarks/${id}`,
  },
  auth: {
    login: '/auth/login',
    profile: 'auth/profile'
  }
};

export const http = axios.create({
  baseURL: 'http://localhost:3000/api',
  timeout: 10000,
})

export function client() {
  const storeAuth = useAuthStore()

  return axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
      Authorization: `Bearer ${storeAuth.getToken}`
    }
  })
}
