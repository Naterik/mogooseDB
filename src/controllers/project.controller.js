const { createAProject, getProject, deleteAProject, updateProject } = require("../services/project.services");

const postCreateProject =async(req,res)=>{
    try{ 
        const project=await createAProject(req.body)
        return res.status(200).json({
            data:project
        })
    }catch(err){
         return res.status(400).json({
            message:err.message
        })
    }
}
const getAllProject=async(req,res)=>{
    try{
 const allProject=await getProject(req.query)
        return res.status(200).json({
            data:allProject
        })
    }catch(err){
         return res.status(400).json({
            message:err.message
        })
    }
}

const putProject=async(req,res)=>{
     try{
 const project=await updateProject(req.body)
        return res.status(200).json({
            data:project
        })
    }catch(err){
         return res.status(400).json({
            message:err.message
        })
    }
}
const deleteProject=async(req,res)=>{
     try{
        const {id}=req.params
 const project=await deleteAProject(id)
        return res.status(200).json({
            data:project
        })
    }catch(err){
         return res.status(400).json({
            message:err.message
        })
    }
}

module.exports={
    postCreateProject,getAllProject,putProject,deleteProject
}