require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const api_routes = require('./routes/routes')

// express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// app.get('/', (req, res) => {
//     res.json({message: "Welcome to App"})
// })

app.use('/api/routes', api_routes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listing on port 4000!!!")
        })
    })
    .catch((e) => {console.log("Can't connect to MongoDB!", e)})