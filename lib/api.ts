// import axios from 'axios'
// import { CreatePostRequest, PostListResponse, PostResponse } from './types'

// // axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study'
// axios.defaults.baseURL = 'https://dummyjson.com'

// export const getPosts = async (tagName?: string, search?: string) => {
//   let url = tagName ? `/posts/tag/${tagName}` : '/posts'
//   if (search) {
//     url += '/search'
//   }
//   const { data } = await axios.get<PostListResponse>(url, { params: { q: search } })
//   return data
// }

// export const getSinglePosts = async (id: string) => {
//   const { data } = await axios.get<PostResponse>(`/posts/${id}`)
//   return data
// }

// export const getSinglePostsMetaData = async (id: string) => {
//   const { data } = await axios.get<PostResponse>(`/posts/${id}`)
//   return data
// }

// export const getSinglePostPreview = async (id: string) => {
//   const { data } = await axios.get<PostResponse>(`/posts/${id}`)
//   return data
// }

// export const getPostTags = async () => {
//   const { data } = await axios.get<string[]>(`/posts/tag-list`)
//   return data
// }

// export const createPost = async (newPost: CreatePostRequest) => {
//   const { data } = await axios.post<PostResponse>(`/posts/add`, newPost)
//   return data
// }
import axios from 'axios'
import {
  CategoryResponse,
  LoginRequest,
  NoteListResponse,
  NoteResponse,
  RegisterRequest,
  UserResponse,
} from './types'

// axios.defaults.baseURL = 'https://next-v1-notes-api.goit.study'
// axios.defaults.baseURL =
const nextServerInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const getNotes = async () => {
  const { data } = await nextServerInstance.get<NoteListResponse>('/notes')
  return data
}

export const getSingleNote = async (id: string) => {
  const { data } = await nextServerInstance.get<NoteResponse>(`/notes/${id}`)
  return data
}

export const getCategories = async () => {
  const { data } = await nextServerInstance.get<CategoryResponse[]>(`/categories`)
  return data
}

// auth

export const login = async (user: LoginRequest) => {
  const { data } = await nextServerInstance.post<UserResponse>(`/auth/login`, user)
  return data
}

export const register = async (user: RegisterRequest) => {
  const { data } = await nextServerInstance.post<UserResponse>(`/auth/register`, user)
  return data
}
