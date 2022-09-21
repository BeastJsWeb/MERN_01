import bcrypt from 'bcryptjs'

class hashService {
  hash(password) {
    try {
      const hash = bcrypt.hashSync(password, 7)
      return hash
    } catch (e) {
      console.log(e)
    }
  }
}

export default new hashService()