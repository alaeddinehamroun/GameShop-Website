//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var productSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true, 
        unique: true,
        trim: true
    },
    subtitle: { 
        type: String, 
        required: true, 
    },
    price: { 
        type: Number, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    isInStock: {
        type: Boolean,
        required: true,
        default: true
    },
    category: {
        type: String,
        required: true
    },
    images: [
        {
            url: String
        }
    ]
  },
  { timestamps: true }
  );
  
module.exports = mongoose.model("Product", productSchema)