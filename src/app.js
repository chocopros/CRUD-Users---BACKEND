// Import Modules
const express = require('express')
const app = express()

const infoRouter = require('./todos/todos.router')

// Enables receiving data in JSON format
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server OK!",
        users: "http://127.0.0.1:9000/users"
    });
});

app.use("/", infoRouter)

//SERVER LISTEN
const PORT = 9000
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});