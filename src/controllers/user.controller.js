const User = require("../models/user")

const getAllUserAPI=async(req,res)=>{
    const user =await User.find({});
    return res.status(200).json({
        EC:0,
        data:user
    })
}
const postCreateUserAPI=async(req,res)=>{
    const {email,name,city}=req.body
    const createUser=await User.create({
        email,name,city
    })
    return res.status(200).json({
        EC:0,
        data:createUser
    })
}
module.exports={
    getAllUserAPI,postCreateUserAPI
}