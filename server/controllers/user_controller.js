// definition of all the callbacks related to the api of the user

const { default: mongoose } = require("mongoose");
const userModel = require("../models/User")
const axios = require("axios")


// register a new user
const addUser = async (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    try {



        const emailCheck = await userModel.findOne({ "email": email })


        if (!emailCheck) {
            const user = await userModel.create(
                { firstName, lastName, email, password }
            );
            res.status(200).json({ "status": "allowed", "user": user });
        }
        else {

            res.status(200).json({ "status": "rejected", "message": "Email Already Taken" })

        }


    }



    catch (err) {
        res.status(400).json({ error: "error communcating to server" })
        console.log(err)

    }



}



const session = async (req, res) => {

    try {

        if(req.session.user)
        {
            res.status(200).json({"status":"allowed"})
        }
        else
        {
            res.status(200).json({ "status": "rejected" })

        }
    }
    catch (err) {
        res.status(400).json({ "Error":  "Error connecting to server"})
    }
}

// user sign in
const signIn = async (req, res) => {

    const { email, password } = req.body

    const target_user = await userModel.findOne({ email: email, password: password })

    if (target_user) {

        // req.session.user = target_user;
        return res.status(200).json({ user: target_user, "status": "allowed" })
    }
    else {
        res.status(200).json({ "status":"rejected",message:"No such User"})
    }
}


module.exports = {
    addUser,
    signIn,
    session,
    
}