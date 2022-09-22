import { useMemo } from "react"

export const usePosts = (posts, query, findBy, sort) => {

  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])

  const searchedPosts = useMemo(() => (
    sortedPosts.filter(post => {
      if (query || findBy) {
        if (findBy) {
          return post[findBy].toLowerCase().includes(query.toLowerCase())
        }
        return post.title.toLowerCase().includes(query.toLowerCase()) 
        || 
        post.author.toLowerCase().includes(query.toLowerCase())
      } 
      return post
    }) 
  ), [query, findBy, sortedPosts])
  return searchedPosts
}