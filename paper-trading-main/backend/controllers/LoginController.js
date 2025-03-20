const Login = require('../models/LoginModel')
const mongoose = require('mongoose')

//get all logins
const getLogins = async(req, res) => {
    const logins = await Login.find({}).sort({createdAt: -1})

    res.status(200).json(logins)
}
//get a single login
const getLogin = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such login'})
    }

    const login = await Login.findById(id)

    if (!login) {
        return res.status(404).json({error: 'No such login'})
    }

    res.status(200).json(login)
}

//create a new login
const createLogin = async(req, res) => {
    const {title, reps, load} = req.body

    try {
        const login = await Login.create({title, load, reps})
        res.status(200).json(login)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
//delete a login
const deleteLogin = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such login'})
    }

    const login = await Login.findOneAndDelete({_id: id})

    if (!login) {
        return res.status(404).json({error: 'No such login'})
    }

    res.status(200).json(login)
}
//update a login
const updateLogin = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such login'})
    }

    const login = await Login.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!login) {
        return res.status(404).json({error: 'No such login'})
    }

    res.status(200).json(login)
}

module.exports = {
    createLogin,
    getLogins,
    getLogin,
    deleteLogin,
    updateLogin
}