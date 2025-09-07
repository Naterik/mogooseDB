const express = require('express')
const app = express()
require('dotenv').config()
const port =process.env.PORT
const configViewEngine = require('./configs/configViewEngine')
const connection = require('./configs/database')
const apiRouter = require('./routes/api')
const fileUpload = require('express-fileupload');
const { MongoClient } = require('mongodb');
app.use(express.json());// for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

configViewEngine(app);

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

apiRouter(app);
// webRouter(app);
    const url = process.env.DB_HOST_WITH_DRIVER;
const client = new MongoClient(url);
const dbName = process.env.DB_NAME;
(async()=>{
  try{
        await connection(); // mongoose 
  // await client.connect();
  // console.log('Connected successfully to server');
  // const db = client.db(dbName);
  // const collection = db.collection('customers');;
    app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

  }catch(error){
    console.log('Error connect to DB :>> ', error);
  }
})();


