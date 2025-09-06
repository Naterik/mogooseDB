const Customer = require("../models/customer");
const { postCreateCustomer, createBulkCustomer, updateCustomer, deleteOneCustomer, deleteManyCustomers, getAllCustomer, getCustomersWithPaginate } = require("../services/customer.services");
const { uploadSingleFile, uploadMultipleFilesName } = require("../services/file.services");

const getAllCustomerAPI=async(req,res)=>{
   
    try{
        const {limit,page}=req.query
        const customer=await getCustomersWithPaginate(limit,page,req.query);
        return res.status(200).json({
            data:customer
        })
    }catch(err){
        return res.status(400).json({
            message:err.message
        })
    }
    
}
const postCreateCustomerAPI=async(req,res)=>{
    const {name,address,phone,email,description}=req.body
      if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const file=await uploadSingleFile(req?.files?.image)
  const image=file.path
  const createData={
    name,address,phone,email,description,image
  }
    const createCustomer=await postCreateCustomer(createData);
    return res.status(200).json({
        EC:0,
        data:createCustomer
    })
}

const postCreateBulkCustomer=async(req,res)=>{
    const {customers}=req.body
    try{
const bulkCustomers=await createBulkCustomer(customers)
    return res.status(200).json({
        EC:0,
        data:bulkCustomers
    })
    }catch(err){
        return res.status(401).json({
            EC:1,
            message:err.message
        })
    }
}

const putUpdateCustomer=async(req,res)=>{
    try{
        const updateData=req.body
        const updateCus=await updateCustomer(updateData)
        return res.status(200).json({
            EC:0,
            data:updateCus
        })
    }catch(err){
        return res.status(400).json({
    EC:0,
    message:err.message
    })
    }
}

const deleteACustomer=async(req,res)=>{
    try{
        const {id}=req.body;
        const customerDelete= await deleteOneCustomer(id);
        return res.status(200).json({
            EC:0,
            data:customerDelete
        })
    }catch(err){
         return res.status(400).json({
    EC:0,
    message:err.message
    })
    }
}

const deleteCustomers=async(req,res)=>{
    try{
       const {customerIds}=req.body
       if(Array.isArray(customerIds)){
        const deleteCustomers=await deleteManyCustomers(customerIds)
        return res.status(200).json({
            EC:0,
            data:deleteCustomers
        })
       }
       return  await deleteACustomer(req,res)
       
    }catch(err){
         return res.status(400).json({
            EC:1,
            message:err.message
    })
    }
}





const uploadFile=async(req, res)=>{  
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send('No files were uploaded.');
  }
  const file=await uploadSingleFile(req?.files?.image) // image is the field
  
return res.status(200).json({
    EC:0,
    data:file
})
}

const upLoadMultipleFiles=async(req,res)=>{
    if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }
  const {files}=req
  if(Array.isArray(files.image)){
    const filesUploads=await uploadMultipleFilesName(files.image);
    return res.status(200).json({
        data:filesUploads
    })
  }else{
    return await uploadFile(req,res);
  }
}
module.exports={
    getAllCustomerAPI,postCreateCustomerAPI,uploadFile,upLoadMultipleFiles,postCreateBulkCustomer,putUpdateCustomer,deleteACustomer,deleteCustomers
}