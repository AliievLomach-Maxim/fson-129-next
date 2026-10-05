'use client'

import { useRouter } from 'next/navigation'

const SearchBox = () => {
  const router = useRouter()

  const handleSubmit = (formData: FormData) => {
    const text = formData.get('search') as string
    router.push(`/posts/filter/all/${text}`)
  }
  return (
    <form action={handleSubmit}>
      <input type='text' name='search' placeholder='enter smth...' />
    </form>
  )
}

export default SearchBox
