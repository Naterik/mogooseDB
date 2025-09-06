const User = require("../models/user")
const getHomePage=async(req, res)=>{
    const listUser=await User.find({});
    console.log('listUser :>> ', listUser);
    res.render("home",{listUser})
}

const getAboutPage=(req,res)=>{
    res.render("about")
}

const getCreateUser=(req,res)=>{
    res.render("create-user")
}

const postCreateUser=async(req,res)=>{
        const {email,name,city}=req.body
        const user = await User.create({email,name,city})
    res.redirect("home")
}

const getUpdateUser=async(req,res)=>{
    const {id}=req.params
    const user=await User.findById(id).exec();
    res.render("update-user",{user})
}
const postUpdateUser=async(req,res)=>{
    const {id,email,name,city}=req.body
  await User.updateOne({ _id:id }, { email:email,name,city });
    res.redirect("/")
}
module.exports ={
    getHomePage,getAboutPage,getCreateUser,postCreateUser,getUpdateUser,postUpdateUser
}