import React, { useEffect, useState } from 'react'

export default function useLOTRData(selection) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const apiUrl = "https://the-one-api.dev/v2"
  const APITOKEN = process.env.REACT_APP_TOKEN
  const options = {
    headers: {
      Authorization: `Bearer ${APITOKEN}`
    }
  }

  useEffect(() => {
    if (!selection) {
      return
    }

    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        console.log(selection, "selection")
        // if (selection === 'quote') selection += '/5cd96e05de30eff6ebcce7eb'
        const url = `${apiUrl}/${selection}`
        const res = await fetch(url, options)

        if (!res.ok) {
          throw new Error(res.statusText)
        }

        const jsonData = await res.json()
        setData(jsonData)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [selection])

  return { data, error, loading }
}
