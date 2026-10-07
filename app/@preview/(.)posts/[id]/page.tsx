import Modal from '@/components/Modal/Modal'
import { getSinglePostPreview } from '@/lib/api'

interface PreviewPostProps {
  params: Promise<{ id: string }>
}

const PreviewPost = async ({ params }: PreviewPostProps) => {
  const { id } = await params
  const post = await getSinglePostPreview(id)
  return (
    <>
      <Modal>
        <h2>Preview post {post.id}</h2>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Modal>
    </>
  )
}

export default PreviewPost

// ./ > (.)
// ../ > (..)
// ../../ > (..)(..)
