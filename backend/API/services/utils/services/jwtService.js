import { secret } from '../../../config/config.js'
import pkg from 'jsonwebtoken';

class jwtService {
  generateAccessToken = (id) => {
    try {
      const payload = {id}
      const accessToken = pkg.sign(payload, secret, {expiresIn: '24h'})
      return accessToken
    } catch (e) {
      console.log(e)
    }
  }
}

export default new jwtService()