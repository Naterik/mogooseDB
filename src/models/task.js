const mongoose=require ('mongoose');
const { Schema } = mongoose;
var mongoose_delete = require('mongoose-delete');

const projectSchema = new Schema({
      name: String,
      startDate: String,
    endDate: String,
    description: String,
});

const userSchema = new Schema({
  email: String, 
  name: String,
});

const taskSchema=new Schema({
        name: {
        type: String,
        required: true
    },
    startDate: String,
    endDate: String,
    description: String,
    projectInfo: projectSchema,
    usersInfo: userSchema,
    status:String,
},
{
    timestamps:true
}
)
taskSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Task = mongoose.model('task', taskSchema);

module.exports=Task