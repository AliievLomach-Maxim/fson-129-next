import { NextResponse } from 'next/server'
import { apiInstance } from '../../api'
import { cookies } from 'next/headers'

export async function POST() {
  const cookieStore = await cookies()

  const res = await apiInstance.post(
    '/auth/logout',
    {},
    { headers: { cookie: cookieStore.toString() } },
  )

  cookieStore.delete('accessToken')
  cookieStore.delete('refreshToken')

  return NextResponse.json(res.data)
}
