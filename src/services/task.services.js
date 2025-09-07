
const  aqp =require('api-query-params') ;
const Task = require('../models/task');
const createATask=async(data)=>{
   if(data.type==="EMPTY-TASK"){
     const createTask=await Task.create(data)
    return createTask
   }
}

const getTask=async(queryString)=>{
   const {filter,limit}=aqp(queryString)
    delete filter.page;
   const offset=(queryString.page -1)*limit
   const allTask=await Task.find(filter).limit(limit).skip(offset).exec();
   return allTask

}

const updateTask =async(data)=>{
   const result = await Task.updateOne({_id:data.id},{...data})
   return result
}

const deleteATask=async(id)=>{
   return await Task.deleteOne({id}).exec();
}
module.exports={createATask,getTask,updateTask,deleteATask}