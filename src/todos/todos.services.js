// Import & destructuring function created in todos.controllers
const {getAllUsers,getUserById,createNewUser} = require('./todos.controllers')


/*********************** GETTING - info ************************/

// service for getting all user exists
const getUsers = (req, res) => {
    const usersAll = getAllUsers()
    res.status(200).json(usersAll)
};


//service for getting only or exclusive ID of a user
const getUserID = (req, res) => {
    const idUser = String(req.params.id)
    const infoUser = getUserById(idUser)

    if (infoUser) {
        res.status(200).json(infoUser)
    } else {
        res.status(404).json({message: "ID USER: does not exist"})
    }

};


/*********************** POSTING - INFO-CREATE ********************/

const createUser = (req, res) => {

    const { 
        first_name, 
        last_name, 
        email, 
        password, 
        birthday } = req.body

    if ( first_name && last_name && email && password && birthday ) {
        const infoNewUser = createNewUser
        (
            first_name, 
            last_name, 
            email, 
            password, 
            birthday
        );
        res.status(201).json(infoNewUser)

    } else {
        res.status(400).json({message: "Missing Data, fail into info"})
    }

}


// REGULAR EXPORT

module.exports = {
    getUsers,
    getUserID,
    createUser
}