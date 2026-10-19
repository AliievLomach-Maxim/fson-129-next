import { NextRequest, NextResponse } from 'next/server'
import { apiInstance } from '../../api'

type Props = {
  params: Promise<{ id: string }>
}

// export async function GET(request: NextRequest, { params }: Props) {
export async function GET(_: NextRequest, { params }: Props) {
  const { id } = await params

  const { data } = await apiInstance.get(`/notes/${id}`)
  return NextResponse.json(data)
}
