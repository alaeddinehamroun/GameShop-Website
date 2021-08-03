var Product = require('../models/Product.js')
var express = require('express');
var router = express.Router();
                                                  //TODO GET ONE IMAGE FOR GET ALL PRODUCTS
//GET ALL PRODUCTS
router.get('/', async (req, res, next) => {
  try{
    //Logic for pagination server side --decided to paginate on client side
    // const pageNumber = parseInt( (req.query.page !== undefined && req.query.page !==0) ?req.query.page :1 );
    // //page size is set to 12 -- can be modified if needed
    // const skip = (pageNumber - 1) * 12
    // const products = await Product.find().sort({updatedAt: 'desc'}).skip(skip).limit(12);
    // console.log(products.length)
    // console.log(pageNumber)
    const products = await Product.find().sort({updatedAt: 'desc'});
    console.log(products.length)
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
