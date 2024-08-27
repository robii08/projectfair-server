//imports
require("dotenv").config()
const express = require("express")
const cors = require("cors")
const router = require('./routes')
require("./connection")

//create server
const pfserver = express()

//connect to frontend
pfserver.use(cors())

//parse json
pfserver.use(express.json())

//router
pfserver.use(router)

pfserver.use('/uploads',express.static('./uploads'))

//create port
const PORT = 4000 || process.env.PORT

//listen
pfserver.listen(PORT,()=>{
    console.log(`server running successfully in port ${PORT}`);
})


//logic
// pfserver.get("/get",(req,res)=>{
//     res.send('get request recieved');
// })

// pfserver.post("/post",(req,res)=>{
//     res.send("post request recieved")
// })

// pfserver.put("/put",(req,res)=>{
//     res.send("put request recieved")
// })

// pfserver.delete("/delete",(req,res)=>{
//     res.send("delete request recieved")
// })