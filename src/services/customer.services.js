const Customer = require("../models/customer");
const  aqp =require('api-query-params') ;

const getAllCustomer=async()=>{
    
    return await Customer.find({})
}
const getCustomersWithPaginate=async(limit,page,queryString)=>{
    if(limit || page){
        let offset=(page-1)*limit
        const { filter } = aqp(queryString);
        delete filter.page
        console.log('filter :>> ', filter);
    const paginate=await Customer.find(filter).limit(limit).skip(offset).exec();
    return paginate
    }else{
        return await getAllCustomer();
    }
}

// const getCustomersWithPaginate=async(limit,page,name)=>{
//     if(limit || page){
// const countItems=await Customer.countDocuments()
//     let offset=(page-1)*limit
//     const countTotalPage=Math.ceil(countItems/limit)
      
//     const paginate=await Customer.find({}).limit(limit).skip(offset).exec();
    
//     if(name){
//         const findName=await Customer.find({...name?{name:{$regex: name, $options: 'i'}}:{}}).limit(limit).skip(offset).exec();
//         return findName
//     }
//     return paginate
//     }else{
//         return await getAllCustomer();
//     }
// }
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
const deleteManyCustomers=async(arrayId)=>{
    return await Customer.delete({_id:{$in:arrayId }});
}

module.exports={
    postCreateCustomer,createBulkCustomer,updateCustomer,deleteOneCustomer,deleteManyCustomers,getAllCustomer,getCustomersWithPaginate
}