const express = require('express')
require("dotenv").config()

const mongoose = require("mongoose")
const User = require("./models/user")

const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())


// Connect to database when running the server
const uri = process.env.DATABASE_URI

async function DBconnect(){
    try{
        await mongoose.connect(uri)
        console.log("Successfully connected to MongoDB!")
    }

    catch(error){
        console.log(error)
    }
}

DBconnect()

// Register User
app.post("/register", async (req, res) => {
    const email = req.body.email
    const fullName = req.body.fullName
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if(password != confirmPassword){
        res.send({"message": "password does not match"})
    }

    // TO DO: Make an 'else if' for if an email already exists

    else{
        const user = new User({
            email: email,
            password: password,
            full_name: fullName
        })

        
        try{
            await user.save()
            res.send({"message": "User created"})
        }

        catch(error){
            res.send({"message": "Error creating user"})
        }
    }
})

// **TO DO: Need to access database with this endpoint to retrieve and verify user login credentials**
app.post("/login", (req,res) => {
    const username = req.body.username
    const password = req.body.password

    const tempUsername = "josh" // temporary username
    const tempPassword = "naraine" // temporary password

    if(username == tempUsername && password == tempPassword){
        res.send({"message": "login successful"})
    }
    else{
        res.send({"message": "login failed"})
    }
    })

app.listen(5000, () => {
    console.log("Server started on port 5000")
})