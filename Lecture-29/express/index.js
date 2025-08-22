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

app.get(' /', (req,res)=>{
    // res.send("Welcome to Root route")
    res.send("<h1>Welcome to Root route by nodemon</h1>")
})

const PORT = 8080;
app.listen(PORT , ()=>{ console.log(`SERVER CONNECTED SUCCESSFULLY`) })