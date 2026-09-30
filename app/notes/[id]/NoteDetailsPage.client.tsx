'use client'

import { getSingleNote } from '@/lib/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

// const NoteDetailsPage = ({noteId}) => {
const NoteDetailsPage = () => {
  const { id } = useParams<{ id: string }>()

  const handleEdit = () => {
    console.log('TEST')
  }

  const { data: note } = useQuery({
    queryKey: ['notes', id],
    queryFn: () => getSingleNote(id),
    refetchOnMount: false,
  })

  //   useMutation()

  return (
    note && (
      <>
        <p>{note.content}</p>
        {/* <p>{note.likesCounter}</p> */}
        <br />
        <br />
        <h3>{note.userId ? `User: ${note.userId}` : 'Have no user'} </h3>
        <button onClick={handleEdit}>Like User</button>
        <br />
        <br />
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleEdit}>Delete</button>
      </>
    )
  )
}

export default NoteDetailsPage
