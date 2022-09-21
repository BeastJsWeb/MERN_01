import { secret } from "../config/config.js";
import pkg from 'jsonwebtoken';

export const auth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }
  try {
    const token = req.headers.authorization
    if (!token) {
      return res.status(401).json({message: 'Authorization error'})
    }
    const decoded = pkg.verify(token, secret)
    req.body = decoded
    next()
  } catch (e) {
    console.log(e)
    return res.status(500).json(e)
  }
}
