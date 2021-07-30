var Product = require('../models/Product.js')
var express = require('express');
var router = express.Router();

//GET ALL PRODUCTS
router.get('/', async (req, res, next) => {
  try{
    const products = await Product.find().sort({updatedAt: 'desc'});
    res.send(products);
  } catch (err) {
    res.status(500).json({message : err.message})
  }
});

//GET PRODUCT BY ID
router.get('/:id', getProductById, (req, res) => {
  res.json(res.product)
})

//GET PRODUCTS BY CATEGORY
router.get('/category/:category', getProductsByCategory, (req, res) => {
  res.json(res.products)
})

//ONLY FOR ADMIN
//CREATE NEW PRODUCT
product = new Product()
router.post('/new',async (req, res, next) => {
  const product = new Product ({
    title: req.body.title,
    subtitle: req.body.subtitle,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    images: req.body.images
  })
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);

  } catch(err) {
    res.status(400).json({message : err.message});
  }
})

//UPDATE PPRODUCT
router.patch('/:id', async (req, res) => {

  const updates = req.body
  const id = req.params.id;
  const options = {new: true};
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, options)
    res.send(updatedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

//DELETE PRODUCT BY ID
router.delete('/:id', getProductById, async (req, res) => {
  try {
    await res.product.remove()
    res.json({ message: 'Deleted product' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
//


async function getProductById(req, res, next) {
  let product
  try {
    product = await Product.findById(req.params.id)
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product with id '+req.params.id })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.product = product
  next()
}
async function getProductsByCategory(req, res, next) {
  let products = [];
  try {
    products = await Product.find( { category: req.params.category })
    if (products == []) {
      return res.status(404).json({ message: 'Cannot find products with category '+req.params.category })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.products = products
  next()
}

module.exports = router;
