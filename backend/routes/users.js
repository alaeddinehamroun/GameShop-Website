var User = require('../models/User.js')
var express = require('express');
var router = express.Router();

//GET ALL USERS
router.get('/', async (req, res, next) => {
  try{
    const users = await User.find().sort({createdAt: 'desc'});
    res.send(users);
  } catch (err) {
    res.status(500).json({message : err.message})
  }
});

//GET USER BY ID
router.get('/:id', getUser, (req, res) => {
  res.json(res.user)
})

//CREATE NEW PRODUCT
user = new User()
router.post('/new',async (req, res, next) => {
  const user = new User ({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    email: req.body.email,
    hash_password: req.body.hash_password,
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
  })
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);

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
    const updatedUser = await User.findByIdAndUpdate(id, updates, options)
    res.send(updatedUser);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

//DELETE PRODUCT BY ID
router.delete('/:id', getUser, async (req, res) => {
  try {
    await res.user.remove()
    res.json({ message: 'Deleted user' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
//


async function getUser(req, res, next) {
  let user
  try {
    user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user with id '+req.params.id })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user
  next()
}

module.exports = router;
