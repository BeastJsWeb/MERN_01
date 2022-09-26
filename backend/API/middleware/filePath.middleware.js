export const filePathMiddleware = (path) => {
  return (req, res, next) => {
    req.filePath = path
    next()
  }
}