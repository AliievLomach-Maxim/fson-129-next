'use client'

import { checkSession, getMe } from '@/lib/api'
import { useAuth } from '@/lib/store/auth-store'
import { useEffect } from 'react'

interface Props {
  children: React.ReactNode
}

const AuthProvider = ({ children }: Props) => {
  const setAuth = useAuth((state) => state.setAuth)
  const clearAuth = useAuth((state) => state.clearAuth)

  useEffect(() => {
    const fetchSession = async () => {
      const isAuth = await checkSession()
      if (isAuth) {
        const user = await getMe()
        setAuth(user)
      } else {
        clearAuth()
      }
    }
    fetchSession()
  }, [clearAuth, setAuth])

  return children
}

export default AuthProvider
