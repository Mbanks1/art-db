const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collectionSchema = new Schema({
  title: String,
}, {
  timestamps: true
})



const userSchema = new Schema(
  {
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    friends: [{type: Schema.Types.ObjectId, ref: "User"}],
    myCollection: [collectionSchema]
  },{
    timestamps: true,
  });


module.exports = mongoose.model("User", userSchema);


