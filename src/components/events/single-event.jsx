import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export const SingleEvent = ({ data }) => {
  const inputEmail = useRef()
  const router = useRouter()

  const onSubmit = async (event) => {
    event.preventDefault()
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id

    try {
      // POST Fetch Request
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      })

      if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()
    } catch (err) {
      console.error(err)
    }
  }

  return (
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
        <form className="email_registration" onSubmit={onSubmit}>
          <label>Enter E-Mail to Subscribe to Event</label>
          <input
            ref={inputEmail}
            id="email"
            placeholder="     Please Insert Your E-Mail Here."
            type="email"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
