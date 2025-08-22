// creating server
//commonjs way
// const express = require('express'); // fn
// const app = express() // object -> main application



// const PORT = 8080;
// app.listen(PORT , ()=>{ console.log(`SERVER CONNECTED SUCCESSFULLY`) })

// ---------------------------------------------
// es module (newer way)
import express from 'express'; // fn
const app = express() // object -> main application
// middleware = fn (which runs on every incoming request)
// let amount = 700;
// app.use( (req,res,next)=>{
//     if(amount >= 800){
//         next();
//     }
//     else{
//         res.send("Sorry We cant help, complete request-response cycle")
//     }
// } )
let amount = 700;
app.use('/home', (req,res,next)=>{
    if(amount >= 800){
        next();
    }
    else{
        res.send("Sorry We cant help, complete request-response cycle")
    }
} )

app.get('/', (req,res)=>{
    // res.send("Welcome to Root route")
    res.send("<h1>Welcome to Root route by nodemon</h1>")
})
// app.post('/home' , (req,res)=>{ 
app.get('/home' , (req,res)=>{ 
    res.send("Welcome HOME") 
})

const PORT = 8080;
app.listen(PORT , ()=>{ console.log(`SERVER CONNECTED SUCCESSFULLY`) })