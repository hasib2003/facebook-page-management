

// definitions of the api related to one table usually
const express = require("express")
const {addUser, signIn,session} = require("../controllers/user_controller")


const routers = express.Router()


routers.post("/add",addUser);
routers.post("/authen",signIn);
routers.get("/session",session);
// routers.post("/proxy",proxy);

module.exports = routers;
