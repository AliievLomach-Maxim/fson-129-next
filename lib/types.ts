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
