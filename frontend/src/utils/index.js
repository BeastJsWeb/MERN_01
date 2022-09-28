import { AuthContext } from './context/auth'
import { PostsContext } from './context/posts'
import { useFetching } from './hooks/useFetching'
import { usePage } from './hooks/usePage'
import { usePagination } from './hooks/usePagination'
import { usePosts } from './hooks/usePosts'
import { getPageCount } from './pages/pages'
import { API_URL } from './config'
import { IMG_URL } from './config'

export { 
  AuthContext,
  PostsContext,
  useFetching,
  usePage,
  usePagination,
  usePosts,
  getPageCount,
  API_URL,
  IMG_URL
}