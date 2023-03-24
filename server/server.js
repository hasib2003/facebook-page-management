const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")

require('dotenv').config()

const userRoutes = require("./routes/user_routes")




const url = `mongodb+srv://induUser:${process.env.PASSWORD}@cluster0.s7vkv8f.mongodb.net/?retryWrites=true&w=majority`


app.use(express.json())
app.use(cors({credentials: true, origin: ['http://localhost:3000',"*"]}));

app.use(
    (req,res,next)=>{
        console.log(req.path, req.method)
        next();
    }
)


const PORT = process.env.PORT

// using the router method to adress the apis
app.use("/api/user",userRoutes)


mongoose.connect(url)
    .then( () => {
        // listening the app after the successful connection
        app.listen(PORT,()=>{
            console.log(`connected to the database and server is running on port ${PORT}`)
        })
    })
    .catch( (err) => {
        console.error(`Error connecting to the database: ${err}`);
    })
