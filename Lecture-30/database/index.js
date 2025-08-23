import express from 'express';
const app = express();


// connect DB
import mongoose from 'mongoose';
mongoose.connect('mongodb://127.0.0.1:27017/foods') //returns you a promise
.then(()=>{
    console.log("DB CONNECTED SUCCESSFULLY"); 
})
.catch((ERR)=>{
    console.log("ERROR: ",ERR);
})



app.get('/' , (req,res)=>{
    res.send("Welcome to Root ROUTE")
})

const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER IS CONNECTED AT PORT: ${PORT}`);
})