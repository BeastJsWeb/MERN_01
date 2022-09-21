export const getPageCount = (totalCount, limit) => {
  const pages = totalCount.length / limit
  return Math.ceil(pages)
}