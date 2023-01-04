const EventsCatPage = () => {
  return (
    <div>
      <h1>Single Event Page</h1>
      <a href="/event/event1">Event 1</a>
      <a href="/event/event2">Event 2</a>
      <a href="/event/event3">Event 3</a>
      <a href="/event/event4">Event 4</a>
      <a href="/event/event5">Event 5</a>
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
  console.log(allPaths)

  return {
    paths: allPaths,
    fallback: false,
  }
}
