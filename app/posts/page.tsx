import { getPosts } from '@/lib/api'
import Link from 'next/link'

const PostListPage = async () => {
  const response = await getPosts()
  return (
    <div>
      <h1>PostListPage</h1>

      {response.posts.length > 0 && (
        <ul>
          {response.posts.map((post) => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PostListPage
