import express from "express"
import mongoose from "mongoose"
import router from "./API/routes/router.js"
import fileUpload from "express-fileupload"
import { PORT, DB_URL } from "./API/config/config.js"
import { filePathMiddleware } from "./API/middleware/filePath.middleware.js"
import * as path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// http://localhost:3001/api/posts // posts
// http://localhost:3001 // picture

const app = express()

app.use(filePathMiddleware(path.resolve(__dirname, 'static')))
app.use(express.json())  // for GET, POST...
app.use(express.static('static')) // for pictures
app.use(fileUpload({})) // for pictures
app.use('/api', router)

// DB__connect
async function startApp() {
  try {
    await mongoose.connect(
      DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }
    )
    app.listen(PORT, () => console.log(`Server starting on port ${PORT}`))
  } catch (e) {
    console.log(e)
  }
}

startApp()