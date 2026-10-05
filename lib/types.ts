export interface NoteListResponse {
  notes: NoteResponse[]
  total: number
}

export interface NoteResponse {
  id: string
  title: string
  content: string
  categoryId: string
  userId: string
}

export interface PostResponse {
  id: number
  title: string
  body: string
}
export interface PostListResponse {
  posts: PostResponse[]
  total: number
  skip: number
  limit: number
}
