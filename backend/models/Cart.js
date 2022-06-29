var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    cartItems: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            quantity: { type: Number, default: 1 },
        }
    ]
}, { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema)