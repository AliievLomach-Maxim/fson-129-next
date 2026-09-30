import { getSingleNote } from '@/lib/api'
import NoteDetailsPage from './NoteDetailsPage.client'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'

interface NoteDetailsPageProps {
  params: Promise<{ id: string }>
}
const Page = async ({ params }: NoteDetailsPageProps) => {
  const { id } = await params
  // const note = await getSingleNote(id)

  const queryClient = new QueryClient()
  const note = await queryClient.query({
    queryKey: ['notes', id],
    queryFn: () => getSingleNote(id),
  })

  return (
    <div>
      <h1>NoteDetailsPage</h1>
      <br />
      <hr />
      <br />
      <h2>{note.title} + like counter </h2>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {/* <NoteDetailsPage noteId={id}/> */}
        <NoteDetailsPage />
      </HydrationBoundary>
    </div>
  )
}

export default Page
