import { getSinglePosts } from '@/lib/api'

interface PostDetailsPageProps {
  params: Promise<{ id: string }>
}
const PostDetailsPage = async ({ params }: PostDetailsPageProps) => {
  const { id } = await params
  const post = await getSinglePosts(id)

  return (
    <div>
      <h1>Post Details Page</h1>
      <br />
      <hr />
      <br />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostDetailsPage
