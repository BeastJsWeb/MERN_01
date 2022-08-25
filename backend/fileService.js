import * as uuid from 'uuid'
import * as path from 'path'

class fileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + '.jpg'
      const filePath = path.resolve('backend/static', fileName)
      file.mv(filePath) // move file to...
      return fileName

    } catch (e) {
      console.log(e)
    }
  }
}

export default new fileService()