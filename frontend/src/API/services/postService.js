import axios from 'axios'
import { API_URL } from '../../utils'

export default class postService {
  static async getAll() {
    const res = await axios.get(`${API_URL}/posts/`)
    return res.data
  }

  static async delete(id) {
    const res = await axios.delete(`${API_URL}/posts/${id}`)
    return res.data
  }

  static async create(form) {
    const config = { 
      headers: {'Content-Type': 'multipart/form-data'}
    }
    const res = await axios.post(`${API_URL}/posts/`, {...form}, config)
    return res.data
  }
}