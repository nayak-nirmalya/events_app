import { readFileSync, writeFileSync } from 'fs'
import path from 'path'

export default function handler(req, res) {
  const { method } = req
  const filePath = buildPath()
  const { events_categories, allEvents } = extractData(filePath)

  if (!allEvents) {
    return res.status(404).json({
      message: 'No Events Found!',
    })
  }

  if (method === 'POST') {
    const { email, eventId } = req.body

    const newAllEvents = allEvents.map((event) => {
      if (event.id === eventId) {
        if (event.emails_registered.includes(email)) {
          res.status(401).json({
            message: 'E-Mail Already Registered!',
          })
          return event
        }
        return {
          ...event,
          emails_registered: [...event.emails_registered, email],
        }
      }
      return event
    })

    writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents }),
    )

    res.status(200).json({
      message: `You Have Been Registered Successfully with E-Mail: ${email} ${eventId}!`,
    })
  }
}

const buildPath = () => path.join(process.cwd(), 'data', 'data.json')

const extractData = (filePath) => {
  const jsonData = readFileSync(filePath)
  return JSON.parse(jsonData)
}
