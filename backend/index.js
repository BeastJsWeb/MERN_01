import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
import fileUpload from "express-fileupload"
//import cors from "./middleware/cors.middleware.js"

// http://localhost:3001/api/posts // posts
// http://localhost:3001 // picture

const PORT = process.env.PORT || 3001
const DB_URL = `mongodb+srv://user:user@cluster0.vxfa5r5.mongodb.net/?retryWrites=true&w=majority`

const app = express()
// GET
app.get('/api', async (req, res) => {
  try {
    await // DB
    console.log(req.query)
    res.json({
      message: "GET. Hello from backend express.js"
    })
  } catch (e) {
    res.status(500).json(e)
  }
})

//app.use(cors)
app.use(express.json())  // for GET, POST...
app.use(express.static('backend/static')) // for pictures
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