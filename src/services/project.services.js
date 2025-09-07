const Project = require("../models/project")
const  aqp =require('api-query-params') ;
const createAProject=async(data)=>{
   if(data.type==="EMPTY-PROJECT"){
     const createProject=await Project.create(data)
    return createProject
   }
   const findProject=await Project.findById(data.projectId).exec();
   
   if(data.type==="ADD-USERS"){
    for (let user of data?.usersArr){
     findProject.usersInfo.push(user)
    }
    const addUser=await findProject.save()
    return addUser
   }
   if(data.type==="REMOVE-USERS"){
      for (let user of data?.usersArr){
     findProject.usersInfo.pull(user)
    }
    const removeUser=await findProject.save();
    return removeUser
   }
   if(data.type==="ADD-TASKS"){
       for (let task of data?.taskArr){
     findProject.tasks.push(task)
    }
    const addTask=await findProject.save()
    return addTask
   }
   
}

const getProject=async(queryString)=>{
   const {filter,limit,population}=aqp(queryString)
    delete filter.page;
   const offset=(queryString.page -1)*limit
   console.log('population :>> ', population);
   const allProject=await Project.find(filter).limit(limit).skip(offset).populate(population).exec();
   return allProject

}

const updateProject =async(data)=>{
   const {id,name,startDate,endDate,description}=data
   const result = await Project.updateOne({_id:id},{name,startDate,endDate,description})
   return result
}

const deleteAProject=async(id)=>{
   return await Project.deleteOne({id}).exec();
}
module.exports={createAProject,getProject,updateProject,deleteAProject}