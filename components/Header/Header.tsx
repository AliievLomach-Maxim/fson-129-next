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
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/profile'>Profile</Link>
        </li>
        <li>
          <Link href='/settings'>Settings</Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
