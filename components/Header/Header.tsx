import Link from 'next/link'
import css from './Header.module.css'
import { getPostTags } from '@/lib/api'

const Header = async () => {
  const res = await getPostTags()
  const tags = res.slice(0, 3)
  return (
    <header>
      <ul className={css.header}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/notes'>Notes</Link>
        </li>
        {/* <li>
          <Link href='/posts'>Posts</Link>
        </li> */}
        <hr />
        <ul>
          <li>
            <Link href={`/posts/filter/all`}>All posts</Link>
          </li>
          {tags.map((tag) => (
            <li key={tag}>
              <Link href={`/posts/filter/${tag}`}>{tag}</Link>
            </li>
          ))}
        </ul>
        <hr />
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
