import axios from 'axios'

export default class postService {
  static async getAll() {
    const res = await axios.get('/api/posts/')
    return res.data
  }

  static async delete(id) {
    const res = await axios.delete(`/api/posts/${id}`)
    return res.data
  }

  static async create(form) {
    const config = { 
      headers: {'Content-Type': 'multipart/form-data'}
    }
    const res = await axios.post(`/api/posts/`,{...form}, config)
    return res.data
  }
}