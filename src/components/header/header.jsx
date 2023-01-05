import Image from 'next/image'
import Link from 'next/link'

export const Header = () => (
  <header>
    <div>
      <div className="topNav">
        <Image
          alt="Nirmalya Nayak"
          src={'/images/sticker.png'}
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
        </nav>
      </div>
      <p className="title">Sed ut perspiciatis unde omnis.</p>
    </div>
  </header>
)
