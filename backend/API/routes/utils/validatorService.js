import { check } from "express-validator";

class validatorService {
  auth() {
    const username = check('username', 'Name cannot be empty').notEmpty()
    const password = check(
      'password', 'Password must contain between 4 and 10 characters'
    ).isLength({min: 4, max: 10})
    return [username, password]
  }
}

export default new validatorService()