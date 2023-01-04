import Image from 'next/image'
import Link from 'next/link'

String.prototype.toTitle = function () {
  return this.replace(/(^|\s)\S/g, function (t) {
    return t.toUpperCase()
  })
}

const EventsCatPage = ({ data }) => {
  return (
    <div>
      <h1>Events in {data[0].city.toString().toTitle()}</h1>
      <div>
        {data.map((event, index) => (
          <Link
            key={event.id}
            href={`/events/${event.city}/${event.id}`}
            // passHref
          >
            <Image
              priority={true}
              src={event.image}
              width={200}
              height={200}
              alt={event.title}
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventsCatPage

export async function getStaticPaths() {
  const { events_categories } = await import('/data/data.json')
  const allPaths = events_categories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
      },
    }
  })
  // console.log(allPaths)

  return {
    paths: allPaths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  // console.log(context)
  const id = context?.params.cat
  const { allEvents } = await import('/data/data.json')

  const data = allEvents.filter((event) => id === event.city)
  // console.log(data)

  return {
    props: { data },
  }
}
