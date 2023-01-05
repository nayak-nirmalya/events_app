import Image from 'next/image'
import Link from 'next/link'

const EventsPageJSX = ({ data }) => (
  <div className="events_page">
    {data.map((event, index) => (
      <Link className="card" key={index} href={`/events/${event.id}`}>
        <Image
          priority={true}
          src={event.image}
          width={300}
          height={300}
          alt={event.title}
        />
        <h2>{event.title}</h2>
      </Link>
    ))}
  </div>
)

export default EventsPageJSX
