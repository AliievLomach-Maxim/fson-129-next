'use client'

import { createPost } from '@/lib/api'
import { usePostDraft } from '@/lib/store/store'
import { CreatePostRequest } from '@/lib/types'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { ChangeEvent } from 'react'
import toast from 'react-hot-toast'

const CreatePostForm = () => {
  const draftStore = usePostDraft()

  const router = useRouter()
  const { mutate } = useMutation({
    mutationFn: (newPost: CreatePostRequest) => createPost(newPost),
    onSuccess: () => {
      toast.success('Post Created')

      draftStore.clearDraft()

      router.push('/posts')
    },
  })

  const handleSubmit = (formData: FormData) => {
    const title = formData.get('title') as string
    const body = formData.get('body') as string
    mutate({ title, body, userId: '1' })
  }
  //
  //
  // const [postObj, setPostObj] = useState({ title: '', body: '' })

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // setPostObj({ [name]: value })
    draftStore.setDraft({ [name]: value })
  }

  return (
    <form action={handleSubmit}>
      <input type='text' name='title' value={draftStore.post.title} onChange={handleChange} />
      <br />
      <textarea name='body' value={draftStore.post.body} onChange={handleChange} />
      <br />
      <button type='submit'>Create Post</button>
    </form>
  )
}

export default CreatePostForm
