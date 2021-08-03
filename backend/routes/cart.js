var Cart = require('../models/Cart.js')
var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const Product = require('../models/Product.js');

// ITEM = PRODUCT + QUANTITY //

//GET CART ITEMS
router.get('/getCartItems', auth, (req, res, next) => {
    Cart.findOne({ user: req.user.id })
        .populate("cartItems.product", "_id title price images")
        .exec((error, cart) => {
            if (error) return res.status(400).json({ error });
            if (cart) {
                let cartItems = {};
                if (!cart.carItems)
                    return res.status(200).json({ message: "cart is empty" });
                cart.cartItems.forEach((item, index) => {
                    cartItems[item.product._id.toString()] = {
                        _id: item.product._id.toString(),
                        name: item.product.name,
                        image: item.product.images[0].url,
                        price: item.product.price,
                        qty: item.quantity,
                    };
                });
                res.status(200).json(cartItems);
            }
        });
});
//UPDATE/ADD ITEM TO CART
router.post('/addToCart', auth, async (req, res, next) => {
    userId = req.user._id;
    try {
        let cart = await Cart.findOne({ userId });
        if (error)
            return res.status(400).json({ error });
        if (cart) {
            // product id + qty
            const { productId, qty } = req.body;
            let itemIndex = cart.carItems.findIndex(i => i._id == productId)
            if (itemIndex > -1) {
                //product exists in the cart, update the quantity
                let itemToBeAdded = cart.cartItems[itemIndex];
                itemToBeAdded.quantity = qty;
                cart.cartItems[itemIndex] = itemToBeAdded;
            } else {
                //product does not exists in cart, add new item
                //but first get all product object by id
                productToBeAdded = Product.findById(productId)
                cart.cartItems.push({ productToBeAdded, quantity });
            }
            cart = await cart.save()
            return res.status(201).send(cart)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("Something Went wrong")
    }
});

//DELETE CART ITEM
router.get('/deleteItem', auth, (req, res, next) => {
    const productId = req.body.payload;
    if (productId) {
        Cart.updateOne(
            { user: req.user._id },
            {
                $pull: {
                    cartItems: {
                        product: productId,
                    },
                },
            }).exec((error, result) => {
                if (error) return res.status(400).json({ error });
                if (result) {
                    res.status(202).json({ result })
                }
            })
    }
})

module.exports = router;
