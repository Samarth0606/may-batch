const express =  require('express')
const app =  express();

const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/SWIGGY_BACKEND') //local db
// mongodb+srv://samarthvohraindia:<db_password>@cluster0.veitz6i.mongodb.net/
mongoose.connect('mongodb+srv://samarthvohraindia:DFZ1pIfXPkrFJqOC@cluster0.lalfxft.mongodb.net/') //cloud db
.then(()=>{
    console.log("DB CONNECTED");
})
.catch((ERR)=>{
    console.log(ERR , "ERROR");
})


app.get('/',(req,res)=>{res.send("Welcome to root route")})

const PORT = 8080;
app.listen(PORT , ()=>{console.log("SERVER CONNECTED SUCCESSFULLY")})

// samarthvohraindia
// DFZ1pIfXPkrFJqOC