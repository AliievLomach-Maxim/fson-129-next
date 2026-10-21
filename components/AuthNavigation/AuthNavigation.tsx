'use client'
import { logout } from '@/lib/api'
import { useAuth } from '@/lib/store/auth-store'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const AuthNavigation = () => {
  const { isAuth, user, clearAuth } = useAuth()
  const router = useRouter()

  const handleClick = async () => {
    await logout()
    clearAuth()
    router.replace('/login')
  }

  return isAuth ? (
    <>
      <li>
        <Link href='/profile'>Profile</Link>
      </li>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <h4>{user?.email}</h4>
        <button onClick={handleClick}>LogOut</button>
      </div>
    </>
  ) : (
    <>
      <li>
        <Link href='/login'>Login</Link>
      </li>
      <li>
        <Link href='/register'>Register</Link>
      </li>
    </>
  )
}

export default AuthNavigation
