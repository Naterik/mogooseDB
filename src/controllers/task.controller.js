const { createATask, getTask, deleteATask, updateTask } = require("../services/task.services");

const postCreateTask =async(req,res)=>{
    try{ 
        const task=await createATask(req.body)
        return res.status(200).json({
            data:task
        })
    }catch(err){
         return res.status(400).json({
            message:err.message
        })
    }
}
const getAllTask=async(req,res)=>{
    try{
 const allTask=await getTask(req.query)
        return res.status(200).json({
            data:allTask
        })
    }catch(err){
         return res.status(400).json({
            message:err.message
        })
    }
}

const putTask=async(req,res)=>{
     try{
 const task=await updateTask(req.body)
        return res.status(200).json({
            data:task
        })
    }catch(err){
         return res.status(400).json({
            message:err.message
        })
    }
}
const deleteTask=async(req,res)=>{
     try{
        const {id}=req.params
 const task=await deleteATask(id)
        return res.status(200).json({
            data:task
        })
    }catch(err){
         return res.status(400).json({
            message:err.message
        })
    }
}

module.exports={
    postCreateTask,getAllTask,putTask,deleteTask
}