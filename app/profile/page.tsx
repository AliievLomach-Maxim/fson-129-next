import { getServerMe } from '@/lib/api-server'

// SSR >>
const ProfilePage = async () => {
  // checkSession > middleware....
  console.log('PROFILE PAGE!!!')
  const user = await getServerMe()
  console.log('user', user)
  return <div>ProfilePage</div>
}

export default ProfilePage

// CSR >>>
// 'use client'

// import {useAuth} from "@/lib/store/auth-store"
// import { redirect } from 'next/navigation'

// const ProfilePage = () => {
// if(!isAuth) redirect('/login')
//     const {isAuth,user} = useAuth()
//   return <div>{user?.email}</div>
// }

// export default ProfilePage
