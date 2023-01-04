import Image from 'next/image'
import Link from 'next/link'

export const HomePage = ({ data }) => (
  <main>
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
)
