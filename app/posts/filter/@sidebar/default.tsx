import { getPostTags } from '@/lib/api'
import Link from 'next/link'

const Sidebar = async () => {
  const res = await getPostTags()
  const tags = res.slice(0, 3)
  return (
    <div>
      <h2>Post tags:</h2>
      <ul>
        <li>
          <Link href={`/posts/filter/all`}>All posts</Link>
        </li>
        {tags.map((tag) => (
          <li key={tag}>
            <Link href={`/posts/filter/${tag}`}>{tag}</Link>
          </li>
        ))}
        <hr />
        <Link href={`/posts/actions/create`}>Create new Post</Link>
      </ul>
    </div>
  )
}

export default Sidebar
