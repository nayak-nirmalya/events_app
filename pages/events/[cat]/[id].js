import { SingleEvent } from '../../../src/components/events/single-event'

const EventPage = ({ data }) => <SingleEvent data={data} />

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
