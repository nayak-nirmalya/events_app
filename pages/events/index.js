import Image from 'next/image'

const EventsPage = ({ data }) => {
  return (
    <div>
      <h1>Event</h1>
      {data.map((event, index) => (
        <a key={index} href={`/events/${event.id}`}>
          <Image
            priority={true}
            src={event.image}
            width={200}
            height={200}
            alt={event.title}
          />
          <h2>{event.title}</h2>
        </a>
      ))}
    </div>
  )
}

export default EventsPage

export async function getStaticProps() {
  const { events_categories } = await import('../../data/data.json')
  // console.log(allEvents)

  return {
    props: {
      data: events_categories,
    },
  }
}
