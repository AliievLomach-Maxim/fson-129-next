import { create } from 'zustand'
import { UserResponse } from '../types'

interface AuthStore {
  isAuth: boolean
  user: UserResponse | null
  setAuth: (user: UserResponse) => void
  clearAuth: () => void
}

export const useAuth = create<AuthStore>()((set) => {
  return {
    isAuth: false,
    user: null,
    setAuth: (user: UserResponse) => set({ user, isAuth: true }),
    clearAuth: () => set({ isAuth: false, user: null }),
  }
})
