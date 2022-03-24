require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db.config')
const app = express()

//Connect to DB
connectDB()


app.use(express.json())

app.use('/todo', require('./routes/todo.routes'))

app.listen(process.env.PORT, console.log(`App is loading on port: ${process.env.PORT}`))