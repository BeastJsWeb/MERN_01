import { useState, useMemo } from "react"

export const usePagination = (getPageCount) => {
  
  const [totalPages, setTotalPages] = useState(0)

  const pagesCountArrey = useMemo(() => {
    setTotalPages(getPageCount)
    const result = []
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1)
    }
    return result
  }, [totalPages, getPageCount])

  return [pagesCountArrey]
}