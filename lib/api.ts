import axios from 'axios'
import { NoteListResponse, NoteResponse, PostListResponse, PostResponse } from './types'

// axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study'
axios.defaults.baseURL = 'https://dummyjson.com'

export const getNotes = async () => {
  const { data } = await axios.get<NoteListResponse>('/notes')
  return data
}

export const getSingleNote = async (id: string) => {
  const { data } = await axios.get<NoteResponse>(`/notes/${id}`)
  return data
}

export const getPosts = async (tagName?: string, search?: string) => {
  let url = tagName ? `/posts/tag/${tagName}` : '/posts'
  if (search) {
    url += '/search'
  }
  const { data } = await axios.get<PostListResponse>(url, { params: { q: search } })
  return data
}

export const getSinglePosts = async (id: string) => {
  const { data } = await axios.get<PostResponse>(`/posts/${id}`)
  return data
}

export const getPostTags = async () => {
  const { data } = await axios.get<string[]>(`/posts/tag-list`)
  return data
}
