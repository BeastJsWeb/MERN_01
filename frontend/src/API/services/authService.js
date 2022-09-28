import axios from "axios";
import { API_URL } from "../../utils";

export default class authService {
  static async registration(form) {
    const res = await axios.post(`${API_URL}/registration`, {...form})
    return res.data
  }

  static async login(form) {
    const res = await axios.post(`${API_URL}/login`, {...form})
    return res.data
  }

  static async auth() {
    const config = { 
      headers: {Authorization: localStorage.getItem('token')}
    }
    const res = await axios.get(`${API_URL}/auth`, config)
    return res.data
  }
}