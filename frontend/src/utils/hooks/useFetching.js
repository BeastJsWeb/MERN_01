import { useState } from "react"

export const useFetching = (callback) => {
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const fetching = async () => {
    setIsLoading(true)
    try {
        await callback()
    } catch (e) {
        console.log(e)
        setError(e)
        setTimeout(() => setError(''), 3000)
    } finally {
        setIsLoading(false)
    }
  }
    
  return [fetching, error, isLoading]
}