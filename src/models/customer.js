const { default: mongoose } = require("mongoose");
var mongoose_delete = require('mongoose-delete');
const customerSchema=mongoose.Schema({
    name :{type:String,required:true},
address :String,
 phone :String,
 email :String,
 image :String,
description :String
}, { timestamps: true 
    // ,
    // statics: {
    //   findByKhuong(name) {
    //     return this.find({ name: new RegExp(name, 'i') });
    //   }
    // }
})
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Customer = mongoose.model('customer', customerSchema);

module.exports=Customer