import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by Nirmalya" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav>
          <img />
          <Link href="/">Home</Link>
          <Link href="/events">Events</Link>
          <Link href="/about-us">About Us</Link>
        </nav>
      </header>

      <main className={styles.main}>
        {data.map((event, index) => (
          <div key={index} id={event.id}>
            <Link href={`/events/${event.id}`}>
              <Image
                priority
                width={200}
                height={200}
                alt={event.title}
                src={event.image}
              />
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </Link>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <p> © 2023 Nirmalya - A Project Built with Next.js </p>
      </footer>
    </>
  )
}

export async function getServerSideProps() {
  const { events_categories } = await import('../data/data.json')
  // console.log(events_categories)

  return {
    props: {
      data: events_categories,
    },
  }
}
