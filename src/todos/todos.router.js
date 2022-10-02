// /users [GET, POST]
// /users/:id [GET]

const router =require('express').Router()

// -> Importing services js
const todoServices = require('./todos.services')

/*************** GETTING INFO USERS ******************/

// /users [>>GET<<, POST]
router.get('/users', todoServices.getUsers)

// /users/:id [GET]
router.get('/users/:id', todoServices.getUserID)


/*************** POSTING INFO NEW USERS ******************/

// /users [GET, >>POST<<]
router.post('/users', todoServices.createUser)


//? export default
module.exports = router