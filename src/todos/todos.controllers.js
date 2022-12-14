// import & Using generator key -> UUID
const uuid = require('uuid')


// DATABASE USERS object like JSON
const usersDB = [
    {
        id: 'c0f6a7c2-e462-47a5-b62b-901ad7c467fa',
        first_name: 'Jesús',
        last_name: 'Arechider',
        email: 'jesuschock93@gmail.com',
        password: 'ja1234',
        birthday: '1993/12/01',
        is_active: true,
        url: `http://127.0.0.1:9000/users/c0f6a7c2-e462-47a5-b62b-901ad7c467fa`
    },{
        id: "62611de8-69f4-4fa3-a5c5-88cdb3b7e06e",
        first_name: "anmy",
        last_name: "moreno",
        email: "anmy@gmail.com",
        password: "am1234",
        birthday: "1990-12-12",
        is_active: true,
        url: "http://127.0.0.1:9000/users/62611de8-69f4-4fa3-a5c5-88cdb3b7e06e"
    }
];


/************* GET *************************/

// Getting All DB users
const getAllUsers = () =>{
    return usersDB
};

// Getting users for ID
const getUserById = id => {
    const getIdParams = String(id)
    const userById = usersDB.find(user => user.id === getIdParams)
    return userById
};

/************* POST - CREATE ***************/
const createNewUser = (first_name, last_name, email, password, birthday) => {

    let uuidGenerate = uuid.v4()

    const newUser = {
        id: uuidGenerate,
        first_name,
        last_name,
        email,
        password,
        birthday,
        is_active: true,
        url: `http://127.0.0.1:9000/users/${uuidGenerate}`
    }
    usersDB.push(newUser)

    return newUser

}


// Exporting the functions across of a require 
module.exports = {
    getAllUsers,
    getUserById,
    createNewUser
}


/************** TEST ******************/
    //Geting all Users
//console.log(getAllUsers())

    //Generate UUID
// console.log(uuid.v4())

    //New User
// console.log(createNewUser("anmy","moreno","anmy@gmail.com","am1234","1990/15/15"))
// console.log(getAllUsers())

    //Find a User existent
//console.log(getUserById("c0f6a7c2-e462-47a5-b62b-901ad7c467f"))
//console.log(getUserById("62611de8-69f4-4fa3-a5c5-88cdb3b7e06e"))