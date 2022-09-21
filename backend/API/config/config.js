//export const secret = "SECRET_KEY_RANDOM";
const config = {
  PORT: process.env.PORT || 3001,
  DB_URL: `mongodb+srv://user:user@cluster0.vxfa5r5.mongodb.net/?retryWrites=true&w=majority`,
  secret: "SECRET_KEY_RANDOM"
}

export const { PORT, DB_URL, secret } = config