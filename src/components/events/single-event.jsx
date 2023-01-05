import Image from 'next/image'

export const SingleEvent = ({ data }) => (
  <>
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
    <div className="event_single_page">
      <input type="email" />
      <button type="submit">Submit</button>
    </div>
  </>
)
