import { create } from 'zustand'
import { CreatePostRequest } from '../types'

interface PostDraftStore {
  post: Partial<CreatePostRequest>
  setDraft: (postDraftData: Partial<CreatePostRequest>) => void
  clearDraft: () => void
}

const defaultPostState = { title: '', body: '', userId: '' }

export const usePostDraft = create<PostDraftStore>()((set) => {
  return {
    post: defaultPostState,
    setDraft: (postDraftData: Partial<CreatePostRequest>) => {
      //   return set({ post: postDraftData })
      return set((prevState) => ({ post: { ...prevState.post, ...postDraftData } }))
    },
    clearDraft: () => {
      return set({ post: defaultPostState })
    },
  }
})
