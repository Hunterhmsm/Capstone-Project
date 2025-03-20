const mongoose = require('mongoose')

const Schema = mongoose.Schema

const loginSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Login', loginSchema)