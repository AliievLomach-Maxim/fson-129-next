import { redirect } from 'next/navigation'

const page = () => {
  redirect('/posts/filter/all')
}

export default page
