const bcrypt = require('bcrypt');
const UserModel = require('../models/User.model');
const jwt = require('jsonwebtoken')

async function register(req,res){
    try{
        const {fullName,email,password} = req.body;
        let data = await UserModel.findOne({email})
        if(data){
            return res.status(409).json({message:"email already exists"})
        }
        else{
            const newUser = await UserModel.create({
                fullName,
                email,
                password: bcrypt.hashSync(password, 10)
            })
            return res.status(201).json(newUser)
        }
    } 
    catch(err){
        return res.status(500).json({message: "error while fetching data"})
    }
}

async function login(req,res){
    try{
        let {email,password} = req.body;
        let data = await UserModel.findOne({email})
        if(!data){
            return res.status(404).json({message:"email doesnot exists"})
        }
        let validPassword = bcrypt.compareSync(password, data.password);
        if(!validPassword){
            return res.status(404).json({message:"Invalid Password"})
        }
        // add token here
        else{
            let token = jwt.sign({ id: data._id }, 'secretkey', {expiresIn: "60m" });
            // return res.status(200).json(data)
            return res.status(200).json({
                user: {
                    email: data.email,
                    fullName: data.fullName,
                    // password: data.password,
                },
                accessToken: token
            })
        }
    }
    catch(err){
        return res.status(500).json({message: "error while fetching data"})
    }
}

module.exports = {register,login}
