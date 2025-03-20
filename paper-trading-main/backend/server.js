require('dotenv').config()

const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const loginRoutes = require('./routes/login')

//express creation
const app = express()

//middleware
app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/login', loginRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log('listening on port 4000')
        })
    })
    .catch((error) => {
        console.log(error)
    })
