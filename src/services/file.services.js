var path = require('path');

const uploadSingleFile=async(fileObject)=>{
  let uploadPath =  path.resolve(__dirname, '../public/img/');
  const exName=path.extname(fileObject?.name)
  let baseName=path.basename(fileObject?.name,exName);
  const finalName=`${baseName}-${Date.now()}${exName}`
  const finalPath=`${uploadPath}/${finalName}`

    try{
         await fileObject.mv(finalPath)
         return {
            status:"success",
            path:finalName,
            failed:null
         }
    }catch(err){
        return {
            status:"success",
            path:null,
            failed:JSON.stringify(err)
        }
    }
}

const uploadMultipleFilesName=async(filesArray)=>{
    let countName=[];
    let fileChange=0;
    for( const file of filesArray){
        try{
 const files=await uploadSingleFile(file)
        if(files){
        countName.push({
            status:"success",
            path:files.path,
            failed:null
         })
         fileChange++
        }

    }catch(err){
         countName.push({
            status:"fail",
            failed:err.message
         })
    }
    }
    return {
    
        countChange:fileChange,
        path:countName,
    
    }
}

module.exports={
    uploadSingleFile,uploadMultipleFilesName
}