
const express=require('express');
const { getAllUserAPI, postCreateUserAPI } = require('../controllers/user.controller');
const { getAllCustomerAPI, postCreateCustomerAPI, uploadFile, upLoadMultipleFiles, postCreateBulkCustomer, putUpdateCustomer, deleteACustomer, deleteCustomers, getCustomerWithPagination } = require('../controllers/customer.controller');
const { postCreateProject, getAllProject, putProject, deleteProject } = require('../controllers/project.controller');
const { postCreateTask, getAllTask, putTask, deleteTask } = require('../controllers/task.controller');
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

routerApi.post("/projects",postCreateProject);
routerApi.get("/projects",getAllProject);
routerApi.put("/projects",putProject);
routerApi.delete("/projects/:id",deleteProject);

routerApi.post("/tasks",postCreateTask);
routerApi.get("/tasks",getAllTask);
routerApi.put("/tasks",putTask);
routerApi.delete("/tasks/:id",deleteTask);



routerApi.post('/file',uploadFile);
routerApi.post('/files',upLoadMultipleFiles);
app.use("/v1/api",routerApi);
}
module.exports=apiRouter