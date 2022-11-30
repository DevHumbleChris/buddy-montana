require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes')

const  app = express()
const PORT = process.env.PORT

// * Middlewares.
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/bot', router)

// * Start Server.
app.listen(PORT, () => {
    console.log(`Server Started At http://127.0.0.1:${PORT} 🚀👩‍🚀`)
})

module.exports = app
