
const express=require('express');
const { getAllUserAPI, postCreateUserAPI } = require('../controllers/user.controller');
const { getAllCustomerAPI, postCreateCustomerAPI, uploadFile, upLoadMultipleFiles, postCreateBulkCustomer, putUpdateCustomer, deleteACustomer, deleteCustomers, getCustomerWithPagination } = require('../controllers/customer.controller');
const routerApi=express.Router()

const apiRouter=(app)=>{
routerApi.get("/users",getAllUserAPI);
routerApi.post("/users",postCreateUserAPI)

routerApi.get("/customers",getAllCustomerAPI);
routerApi.post("/customers",postCreateCustomerAPI)
routerApi.post("/customers-bulk",postCreateBulkCustomer)
routerApi.put("/customers",putUpdateCustomer)
routerApi.delete("/customers",deleteACustomer);
routerApi.delete("/customers-bulk",deleteCustomers)


routerApi.post('/file',uploadFile);
routerApi.post('/files',upLoadMultipleFiles);
app.use("/v1/api",routerApi);
}
module.exports=apiRouter