// /users [GET, POST]
// /users/:id [GET]

const router =require('express').Router()

// -> Importing services js
const todoServides = require('./todos.services')


// /users [GET, POST]
router.get('/users')
router.post('/users')


// /users/:id [GET]
router.get('/users/:id')



