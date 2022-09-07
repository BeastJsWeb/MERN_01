import { useEffect, useState } from "react"
import axios from "axios"

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios
      .get(url)
      .then(res => {
        setData(res.data)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
        setError(e)
      })
  }, [url])
    
  return {data, error, loading}
}