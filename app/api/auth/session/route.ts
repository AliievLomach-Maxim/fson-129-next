import { NextResponse } from 'next/server'
import { apiInstance } from '../../api'
import { cookies } from 'next/headers'
import { parseSetCookie } from 'cookie'

export async function GET() {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')
  const refreshToken = cookieStore.get('refreshToken')

  if (accessToken) return NextResponse.json({ success: true })

  if (!refreshToken) return NextResponse.json({ success: false })

  const res = await apiInstance.get('/auth/session', {
    headers: { cookie: cookieStore.toString() },
  })
  const [access, refresh] = res.headers['set-cookie']!

  const newAccessToken = parseSetCookie(access)
  const newRefreshToken = parseSetCookie(refresh)

  if (newAccessToken.value)
    cookieStore.set(newAccessToken.name, newAccessToken.value, newAccessToken)
  if (newRefreshToken.value)
    cookieStore.set(newRefreshToken.name, newRefreshToken.value, newRefreshToken)

  return NextResponse.json(res.data)
}
