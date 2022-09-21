import { AuthContext } from './context/auth'
import { PostsContext } from './context/posts'
import { useFetching } from './hooks/useFetching'
import { usePage } from './hooks/usePage'
import { usePagination } from './hooks/usePagination'
import { usePosts } from './hooks/usePosts'
import { getPageCount } from './pages/pages'

export { 
  AuthContext,
  PostsContext,
  useFetching,
  usePage,
  usePagination,
  usePosts,
  getPageCount
}