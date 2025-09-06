const express = require('express')
const app = express()
require('dotenv').config()
const port =process.env.PORT
const webRouter =require("./routes/web")
const configViewEngine = require('./configs/configViewEngine')
const connection = require('./configs/database')
const apiRouter = require('./routes/api')
const fileUpload = require('express-fileupload');

app.use(express.json());// for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

configViewEngine(app);

app.use(fileUpload({
  useTempFiles : true,
  tempFileDir : '/tmp/'
}));

apiRouter(app);
// webRouter(app);

(async()=>{
  try{
    await connection();
    app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  }catch(error){
    console.log('Error connect to DB :>> ', error);
  }
})();


