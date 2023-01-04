import Image from 'next/image'
import Link from 'next/link'

export const Header = () => (
  <header>
    <div>
      <Image
        alt="Nirmalya Nayak"
        src={'/images/logo_black.png'}
        width={50}
        height={50}
      />
      <nav>
        <img />
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about-us">About Us</Link>
      </nav>
    </div>
    <h1>Header H1 Tag. Hi, Everyone.</h1>
  </header>
)
