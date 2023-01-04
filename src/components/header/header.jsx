import Image from 'next/image'
import Link from 'next/link'

export const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <Image
          className="img"
          alt="Nirmalya Nayak"
          src={'/images/logo_black.png'}
          width={50}
          height={50}
        />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
          </ul>
          <img />
        </nav>
      </div>
      <h1>Header H1 Tag. Hi, Everyone.</h1>
    </div>
  </header>
)
