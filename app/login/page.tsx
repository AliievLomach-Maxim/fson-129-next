'use client'

import { login } from '@/lib/api'
import { useAuth } from '@/lib/store/auth-store'
import { LoginRequest } from '@/lib/types'
import { useRouter } from 'next/navigation'

const Login = () => {
  const setAuth = useAuth((state) => state.setAuth)

  const router = useRouter()

  const handleSubmit = async (formData: FormData) => {
    const user = Object.fromEntries(formData) as unknown as LoginRequest
    const res = await login(user)
    setAuth(res)
    router.replace('/')
  }
  return (
    <form action={handleSubmit}>
      <input type='email' name='email' />
      <br />
      <input type='password' name='password' />
      <br />
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
