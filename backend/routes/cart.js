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
                let cartItems = [];
                if (cart.carItems == [])
                    return res.status(200).json({ message: "cart is empty" });
                cart.cartItems.forEach((item, index) => {
                    cartItems.push ({
                        _id: item.product._id.toString(),
                        title: item.product.title,
                        image: item.product.images[0].url,
                        price: item.product.price,
                        qty: item.quantity,
                    });
                });
                res.status(200).json(cartItems);
            }
        });
});
//UPDATE/ADD ITEM TO CART
router.post('/addToCart', auth, async (req, res, next) => {
    userId = req.user.id;
    console.log(userId)
    
    try {
        let cart = await Cart.findOne( {user: userId} );
        console.log(cart)
        if (cart) {
            // product id + qty
            const { productId, qty } = req.body;
            console.log(productId+"g"+qty)
            console.log(cart.cartItems)
            let itemIndex = cart.cartItems.findIndex(i => i.product == productId)
            console.log(itemIndex)

            if (itemIndex > -1) {
                //product exists in the cart, update the quantity
                let itemToBeAdded = cart.cartItems[itemIndex];
                itemToBeAdded.quantity += qty;
                cart.cartItems[itemIndex] = itemToBeAdded;
            } else {
                //product does not exists in cart, add new item
                //but first get product object by id
                product = await Product.findById(productId)
                console.log("product to be added: "+product)
                item= {
                    product: product,
                    quantity: qty
                }
                console.log(item)
                cart.cartItems.push(item);
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
router.post('/deleteItem', auth,async (req, res, next) => {
    const productId = req.body.productId;
    userId = req.user.id;
    try {
        let cart = await Cart.findOne( {user: userId} );
        if (cart) {
            console.log("cart before delete"+cart)
            let itemIndex = cart.cartItems.findIndex(i => i.product == productId)
            console.log(itemIndex)
            if (itemIndex > -1) {
                cart.cartItems.splice(itemIndex,1)
            } else {
                return res.status(500).send('product does not exist in cart')
            }
            cart = await cart.save()
            return res.status(202).send(cart)
        }
    } catch (err) {
        console.log(err)
        res.status(500).send("Something Went wrong")
    }
})

module.exports = router;
