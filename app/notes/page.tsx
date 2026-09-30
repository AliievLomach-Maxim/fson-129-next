// SSR >>>
import NoteList from '@/components/NoteList/NoteList'
import { getNotes } from '@/lib/api'

const NotesPage = async () => {
  const res = await getNotes()

  return (
    <>
      <h1>NotesPage {res.total}</h1>
      {res.notes?.length > 0 && <NoteList notes={res.notes} />}
    </>
  )
}

// CSR >>
// 'use client'
// import { NoteListResponse } from '@/lib/types'
// import { useEffect, useState } from 'react'

// const NotesPage = () => {
//   const [response, setResponse] = useState<NoteListResponse | null>(null)
//   useEffect(() => {
//     const fetchNotes = async () => {
//       const res = await getNotes()
//       setResponse(res)
//     }
//     fetchNotes()
//   }, [])
//   const handleClick = () => {
//     console.log('Click')
//   }
//   return (
//     <>
//       <h1>NotesPage {response?.total}</h1>
//       {response && response.notes.length > 0 && <NoteList notes={response.notes} />}
//       <button onClick={handleClick}>Next Page</button>
//     </>
//   )
// }

export default NotesPage
