import { NoteResponse } from '@/lib/types'
import Link from 'next/link'

interface NoteListProps {
  notes: NoteResponse[]
}

const NoteList = ({ notes }: NoteListProps) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id}>
          <Link href={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NoteList
