import { NextRequest, NextResponse } from 'next/server'
import { apiInstance } from '../../api'
import { AxiosError } from 'axios'
import { cookies } from 'next/headers'
import { parseSetCookie } from 'cookie'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const res = await apiInstance.post('/auth/login', body)
    const cookiesStore = await cookies()

    const [access, refresh] = res.headers['set-cookie']!

    const accessToken = parseSetCookie(access)
    const refreshToken = parseSetCookie(refresh)

    if (accessToken.value) cookiesStore.set(accessToken.name, accessToken.value, accessToken)
    if (refreshToken.value) cookiesStore.set(refreshToken.name, refreshToken.value, refreshToken)

    return NextResponse.json(res.data)
  } catch (error) {
    const err = error as AxiosError
    return NextResponse.json(error, { status: err.status })
  }
}
