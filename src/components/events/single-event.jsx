import Image from 'next/image'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

export const SingleEvent = ({ data }) => {
  const inputEmail = useRef()
  const router = useRouter()
  const [message, setMessage] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!emailValue.match(validRegex)) {
      setMessage('Please Enter Valid E-Mail Address!')
    }

    try {
      // POST Fetch Request
      const response = await fetch('/api/email-registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      })

      //   if (!response.ok) throw new Error(`Error: ${response.status}`)
      const data = await response.json()
      setMessage(data.message)
      inputEmail.current.value = ''
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
        <p>{message}</p>
      </div>
    </>
  )
}
