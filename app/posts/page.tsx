import { getPosts } from '@/lib/api'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const PostListPage = async () => {
  redirect('/posts/filter/all')
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
