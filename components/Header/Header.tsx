import Link from 'next/link'
import css from './Header.module.css'

const Header = () => {
  return (
    <header>
      <ul className={css.header}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/notes'>Notes</Link>
        </li>
        <li>
          <Link href='/posts/filter/all'>Posts</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
