import { NextResponse } from 'next/server'
import { apiInstance } from '../api'

export async function GET() {
  const { data } = await apiInstance.get('/categories')
  return NextResponse.json(data)
}
