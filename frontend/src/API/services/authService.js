import axios from "axios";

export default class authService {
  static async registration(form) {
    const res = await axios.post('/api/registration', {...form})
    return res.data
  }

  static async login(form) {
    const res = await axios.post('/api/login', {...form})
    return res.data
  }

  static async auth() {
    const config = { 
      headers: {Authorization: localStorage.getItem('token')}
    }
    const res = await axios.get('/api/auth', config)
    return res.data
  }
}