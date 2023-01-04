import Image from 'next/image'
import Link from 'next/link'

export const HomePage = ({ data }) => (
  <div className="home_body">
    {data?.map((event, index) => (
      <Link key={index} className="card" href={`/events/${event.id}`}>
        <div className="image">
          <Image
            priority
            width={200}
            height={200}
            alt={event.title}
            src={event.image}
          />
        </div>
        <div className="content">
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </div>
      </Link>
    ))}
  </div>
)
