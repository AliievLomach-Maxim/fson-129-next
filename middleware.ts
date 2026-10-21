import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'
import { checkServerSession } from './lib/api-server'
import { parseSetCookie } from 'cookie'

const privateRoutes = ['/profile', '/notes']
const publicRoutes = ['/login', '/register']

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl

  const cs = await cookies()
  const accessToken = cs.get('accessToken')
  const refreshToken = cs.get('refreshToken')

  if (privateRoutes.some((r) => r.startsWith(pathname))) {
    if (accessToken) {
      // Authorized >>
      return NextResponse.next()
    }
    if (!refreshToken) {
      // UnAuthorized >>
      // redirect to login
      return NextResponse.redirect(new URL('/login', request.nextUrl.origin)) // http://localhost:3000/login
    }
    if (refreshToken) {
      // checkSession > for get 2 new tokens
      const res = await checkServerSession()
      const [access, refresh] = res.headers['set-cookie']!

      const newAccessToken = parseSetCookie(access)
      const newRefreshToken = parseSetCookie(refresh)

      if (newAccessToken.value) cs.set(newAccessToken.name, newAccessToken.value, newAccessToken)
      if (newRefreshToken.value)
        cs.set(newRefreshToken.name, newRefreshToken.value, newRefreshToken)
      // Authorized > access to page
      return NextResponse.next()
    }
  }

  if (publicRoutes.some((r) => r.startsWith(pathname))) {
    if (accessToken) return NextResponse.redirect(new URL('/', request.nextUrl.origin))
    if (!refreshToken) return NextResponse.next()
    if (refreshToken) {
      // checkSession > for get 2 new tokens
      const res = await checkServerSession()
      const [access, refresh] = res.headers['set-cookie']!

      const newAccessToken = parseSetCookie(access)
      const newRefreshToken = parseSetCookie(refresh)

      if (newAccessToken.value) cs.set(newAccessToken.name, newAccessToken.value, newAccessToken)
      if (newRefreshToken.value)
        cs.set(newRefreshToken.name, newRefreshToken.value, newRefreshToken)
      // redirect to HOME for Authorized user
      return NextResponse.redirect(new URL('/', request.nextUrl.origin))
    }
  }
  return NextResponse.next()
}

export const config = { matcher: ['/profile', '/notes', '/login', '/register'] }

// request.nextUrl = http://localhost:3000/profile
//   pathname = /profile
//   /login
//   request.nextUrl.origin = http://localhost:3000
