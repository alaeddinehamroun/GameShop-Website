//Require Mongoose
var mongoose = require('mongoose');
const bcrypt = require("bcrypt");

//Define a schema
var userSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
        trim: true,
        unique: true
      },
      email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      
      avatar: {
        type: String,
      },
      role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      }
  },
  { timestamps: true }
  );
  
  userSchema.methods = {
    authenticate: async function (password) {
      return await bcrypt.compare(password, this.hash_password);
    },
  };
  
  module.exports = mongoose.model("User", userSchema);
