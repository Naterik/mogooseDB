const mongoose =require ('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  name: String,
  city: String,
});

const User = mongoose.model('user', userSchema);

module.exports=User