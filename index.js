require('dotenv').config();
require('express-async-errors');
const bodyParser = require("body-parser")
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./db/connect')
const routes = require('./routes/main')
const notFoundMiddleware = require('./middleware/notFound')
app.use(bodyParser.urlencoded({ extended: false }))



app.use(express.json())
app.use(cors());

app.use('/api/shorturl', routes)
app.use(notFoundMiddleware)


const port = process.env.PORT
const start = async ()=> {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => console.log(`Listening on port ${port}`));
  } catch (error) {
    console.log(error)
  }
}

start()

