import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"


let app = express()
app.use(bodyParser.json)

//** create a database connection */
let mongoUrl ="mongodb+srv://admin:root@cluster0.irp44.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(mongoUrl)
let connection = mongoose.connection

connection.once("open",()=>{
    console.log("MongoDB connnection is successfully")
})


//** port */
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})

