import { useState, useMemo } from "react"

export const usePagination = (totalPosts, getPageCount, limit) => {
  
  const [totalPages, setTotalPages] = useState(0)

  useMemo(() => {
    setTotalPages(getPageCount(totalPosts, limit))
  }, [totalPosts, getPageCount, limit])

  const pagesCountArrey = useMemo(() => {
    const result = []
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1)
    }
    return result
  }, [totalPages])

  return [pagesCountArrey]
}