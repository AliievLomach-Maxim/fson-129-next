import { SessionResponse, UserResponse } from './types'
import { cookies } from 'next/headers'
import { nextServerInstance } from './api'

export const getServerMe = async () => {
  const cs = await cookies()

  const { data } = await nextServerInstance.get<UserResponse>(`/auth/me`, {
    headers: { cookie: cs.toString() },
  })
  return data
}

export const checkServerSession = async () => {
  const cs = await cookies()
  const res = await nextServerInstance.get<SessionResponse>(`/auth/session`, {
    headers: { cookie: cs.toString() },
  })
  return res
}
