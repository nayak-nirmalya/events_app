import Image from 'next/image'

const EventPage = ({ data }) => {
  return (
    <div className="event">
      <h1>{data.title}</h1>
      <Image
        priority
        src={data.image}
        width={1000}
        height={500}
        alt={data.title}
      />
      <p>{data.description}</p>
    </div>
  )
}

export default EventPage

export async function getStaticPaths() {
  const { allEvents } = await import('/data/data.json')
  const allPaths = allEvents.map((event) => {
    return {
      params: {
        cat: event.city,
        id: event.id,
      },
    }
  })

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const { allEvents } = await import('/data/data.json')
  const eventData = allEvents.find((event) => id === event.id)

  return {
    props: { data: eventData },
  }
}
