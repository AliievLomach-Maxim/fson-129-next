'use client'

import { register } from '@/lib/api'
import { RegisterRequest } from '@/lib/types'

const Register = () => {
  const handleSubmit = async (formData: FormData) => {
    const user = Object.fromEntries(formData) as unknown as RegisterRequest
    const res = await register(user)
    console.log('res', res)
  }
  return (
    <form action={handleSubmit}>
      <input type='text' name='username' placeholder='name' />
      <br />
      <input type='email' name='email' />
      <br />
      <input type='password' name='password' />
      <br />
      <button type='submit'>Register</button>
    </form>
  )
}

export default Register
