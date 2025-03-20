const express = require('express')
const {
    createLogin,
    getLogin,
    getLogins,
    deleteLogin,
    updateLogin
} = require('../controllers/LoginController')

const router = express.Router()

// GET all workouts
router.get('/', getLogins)

// GET a single workout
router.get('/:id', getLogin)

// POST a new workout
router.post('/', createLogin)

// DELETE a workout
router.delete('/:id', deleteLogin)

// UPDATE a workout
router.patch('/:id', updateLogin)

module.exports = router