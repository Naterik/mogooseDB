const mongoose=require ('mongoose');
const { Schema } = mongoose;
var mongoose_delete = require('mongoose-delete');
const customerSchema = new Schema({
      name: String,
  email: String, 
  phone: String,
});

const userSchema = new Schema({
  email: String, 
  name: String,
});


const projectSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    startDate: String,
    endDate: String,
    description: String,
    customerInfo: customerSchema,
    usersInfo: [{ type: Schema.Types.ObjectId, ref: 'user' }],
    leader: userSchema,
    tasks: [{ type: Schema.Types.ObjectId, ref: 'task' }]
}, {
    timestamps: true // Automatically adds createdAt and updatedAt
});
projectSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Project = mongoose.model('project', projectSchema);

module.exports=Project

