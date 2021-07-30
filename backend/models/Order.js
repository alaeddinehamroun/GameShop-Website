//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var orderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    details: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true },
        }
    ],
    total: {
        type: Number,
      }
},
    { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema)