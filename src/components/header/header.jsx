import Link from 'next/link'

import styles from '../../../styles/Home.module.css'

export const Header = () => (
  <header className={styles.header}>
    <nav>
      <img />
      <Link href="/">Home</Link>
      <Link href="/events">Events</Link>
      <Link href="/about-us">About Us</Link>
    </nav>
  </header>
)
