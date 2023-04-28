const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 8080
const adRoutes = require("./view/routes")


app.use(express.json())

app.use(adRoutes)


mongoose.connect("mongodb+srv://vipuly1:wxDLfBi3lJnU0W6q@cluster0.nftit.mongodb.net/test2").then(()=>{
    console.log("DB Connected")
}).catch((err)=>{
    console.log(err)
})

app.listen(port, (err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Server has started")
    }
})