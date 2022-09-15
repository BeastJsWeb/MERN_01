import { useState, useMemo } from "react"

export const usePage = (array, limit) => {
  const [page, setPage] = useState(1)

  const currentPage = useMemo(() => {
    return array.slice(page * limit - limit, page * limit)
  }, [limit, array, page])

  return [page, setPage, currentPage]
}