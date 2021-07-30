//Require Mongoose
var mongoose = require('mongoose');
const bcrypt = require("bcrypt");

//Define a schema
var userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
      },
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
      hash_password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      },
  },
  { timestamps: true }
  );
  
  userSchema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.lastName}`;
  });
  
  userSchema.methods = {
    authenticate: async function (password) {
      return await bcrypt.compare(password, this.hash_password);
    },
  };
  
  module.exports = mongoose.model("User", userSchema);
