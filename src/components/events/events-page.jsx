import Image from 'next/image'
import Link from 'next/link'

const EventsPageJSX = ({ data }) => (
  <div className="events_page">
    <h1>Events Page</h1>
    {data.map((event, index) => (
      <Link key={index} href={`/events/${event.id}`}>
        <Image
          priority={true}
          src={event.image}
          width={200}
          height={200}
          alt={event.title}
        />
        <h2>{event.title}</h2>
      </Link>
    ))}
  </div>
)

export default EventsPageJSX
