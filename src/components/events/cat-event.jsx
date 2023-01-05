import Image from 'next/image'
import Link from 'next/link'

export const CatEvent = ({ data, pageName }) => (
  <div className="cat_events">
    <h1 className="cat_header">
      Events in {pageName.toString().replace('-', ' ').toTitle()}
    </h1>
    <div className="content">
      {data.map((event, index) => (
        <Link
          className="card"
          key={event.id}
          href={`/events/${event.city}/${event.id}`}
        >
          <Image
            className="img"
            priority={true}
            src={event.image}
            width={300}
            height={300}
            alt={event.title}
          />
          <h2>{event.title}</h2>
          <p>{event.description}</p>
        </Link>
      ))}
    </div>
  </div>
)
