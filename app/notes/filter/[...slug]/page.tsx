import NoteList from '@/components/NoteList/NoteList'
import { getNotes } from '@/lib/api'

const NotesPageWithFilters = async () => {
  const notes = await getNotes()

  return (
    <div>
      <h1>Notes</h1>
      <br />
      <br />
      <br />
      <NoteList notes={notes.notes} />
    </div>
  )
}

export default NotesPageWithFilters
