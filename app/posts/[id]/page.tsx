import { getSinglePosts, getSinglePostsMetaData } from '@/lib/api'
import { Metadata } from 'next'

interface PostDetailsPageProps {
  params: Promise<{ id: string }>
}

// export const metadata: Metadata = {
//   title: 'Details for "post.title"',
// }

export const generateMetadata = async ({ params }: PostDetailsPageProps): Promise<Metadata> => {
  const { id } = await params
  const post = await getSinglePostsMetaData(id)
  return { title: `Details for ${post.title}` }
}

const PostDetailsPage = async ({ params }: PostDetailsPageProps) => {
  const { id } = await params
  const post = await getSinglePosts(id)

  return (
    <div>
      <h1>Post Details Page</h1>
      <code>Tags: {post.tags.join('; ')}</code>
      <br />
      <hr />
      <br />
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <br />
      <hr />
      <br />
      <h3>Views:{post.views}</h3>
    </div>
  )
}

export default PostDetailsPage
