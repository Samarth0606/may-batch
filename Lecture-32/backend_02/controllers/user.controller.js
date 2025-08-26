

function register(req,res){
    try{

    } 
    catch(err){
        return res.status(500).json({message: "error while fetching data"})
    }
}

function login(req,res){
    try{
        
    }
    catch(err){
        return res.status(500).json({message: "error while fetching data"})
    }
}

module.exports = {register,login}
