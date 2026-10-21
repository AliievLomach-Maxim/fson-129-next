import { NextResponse } from 'next/server'
import { apiInstance } from '../../api'
import { cookies } from 'next/headers'

export async function GET() {
  const cookieStore = await cookies()

  const { data } = await apiInstance.get('/auth/me', {
    headers: { cookie: cookieStore.toString() },
  })
  return NextResponse.json(data)
}
