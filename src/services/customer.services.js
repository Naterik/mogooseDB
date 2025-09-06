const Customer = require("../models/customer");

const postCreateCustomer=async(createData)=>{
    const { name,address,phone,email,description,image}=createData;
    return await Customer.create({name,address,phone,email,description,image})
}
const createBulkCustomer =async(customers)=>{
    return await Customer.insertMany(customers)
}
const updateCustomer=async(customers)=>{
    const {id,email,name,address,phone,description}=customers
    console.log('customers :>> ', customers);
    return await Customer.updateOne({_id:id},{email,name,address,phone,description})
}
const deleteOneCustomer=async(id)=>{
    return await Customer.deleteById(id)
}
module.exports={
    postCreateCustomer,createBulkCustomer,updateCustomer,deleteOneCustomer
}