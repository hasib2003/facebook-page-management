const mongoose = require("mongoose");


const newUser = new mongoose.Schema
(

{

    firstName : {
        type:String,
        requierd: true,
        trim: true,
    },
    lastName : {
        type:String,
        requierd: true,
        trim: true,
    },
    email : {
        type:String,
        requierd: true,
        trim: true,
    },

    password : {
        type:String,
        requierd: true,
        trim: true,
    }

}
,{timestamps:true}

)


module.exports = mongoose.model("newUser", newUser);