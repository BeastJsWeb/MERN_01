import { useMemo } from "react"

export const usePosts = (posts, query, select) => {
  const searchedPosts = useMemo(() => (
    posts.filter(post => {
      if (query || select) {
        if (select === 'author') {
          return post.author.toLowerCase().includes(query.toLowerCase())
        }
        return post.title.toLowerCase().includes(query.toLowerCase())
      } 
      return post
    }) 
  ), [query, posts, select])
  return searchedPosts
}