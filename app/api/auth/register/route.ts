import { NextRequest, NextResponse } from 'next/server'
import { apiInstance } from '../../api'
import { AxiosError } from 'axios'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { data } = await apiInstance.post('/auth/register', body)
    return NextResponse.json(data)
  } catch (error) {
    const err = error as AxiosError
    return NextResponse.json(error, { status: err.status })
  }
}
