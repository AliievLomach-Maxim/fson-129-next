'use client'

import { login } from '@/lib/api'
import { LoginRequest } from '@/lib/types'

const Login = () => {
  const handleSubmit = async (formData: FormData) => {
    const user = Object.fromEntries(formData) as unknown as LoginRequest
    const res = await login(user)
    console.log('res', res)
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
