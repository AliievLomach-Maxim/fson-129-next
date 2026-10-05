import SearchBox from '@/components/SearchBox/SearchBox'
import { getPosts } from '@/lib/api'
import Link from 'next/link'

interface PostListPageProps {
  params: Promise<{ slug: string[] }>
}
const PostListPage = async ({ params }: PostListPageProps) => {
  const { slug } = await params
  const tagName = slug[0]
  const searchQuery = slug[1]

  const response = await getPosts(tagName === 'all' ? '' : tagName, searchQuery)

  return (
    <div>
      <h1>PostListPage</h1>
      <br />
      <SearchBox />
      <br />

      <hr />
      <br />
      <br />

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
