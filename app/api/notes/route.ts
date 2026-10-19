import { NextResponse } from 'next/server'
import { apiInstance } from '../api'

export async function GET() {
  const { data } = await apiInstance.get('/notes')
  return NextResponse.json(data)
}

// const res = await fetch.get('/', { type: 'POST' })
// const data = res.json()
