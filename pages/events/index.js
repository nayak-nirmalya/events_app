import EventsPageJSX from '../../src/components/events/events-page'

const EventsPage = ({ data }) => {
  return <EventsPageJSX data={data} />
}

export default EventsPage

export async function getStaticProps() {
  const { events_categories } = await import('/data/data.json')
  // console.log(allEvents)

  return {
    props: {
      data: events_categories,
    },
  }
}
