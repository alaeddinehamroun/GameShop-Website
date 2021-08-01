var User = require('../models/User.js')
var express = require('express');
var router = express.Router();
const auth = require('../middleware/auth');
const jwt = require('jsonwebtoken') //to generate token
const bcrypt = require('bcryptjs') //encrypt password
const { check, validationResult } = require('express-validator');//check validation for requests
const gravatar = require('gravatar'); // get user image by email


//REGISTER
router.post('/register', [
  //validations
  check('username', 'username is required').not().isEmpty(),
  check('email', 'please include a valid email').isEmail(),
  check('password', 'please enter a password with 6 or more characters').isLength({
    min: 6
  })
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }
  const {
    username,
    email,
    password
  } = req.body;
  try {
    let userWithTheSameUsername = await User.findOne({ username })
    let userWithTheSameEmail = await User.findOne({ email })
    // if use exist
    if (userWithTheSameUsername) {
      return res.status(400).json({
        errors: [
          {
            usernameError: 'username is taken'
          }
        ]
      })
    }
    if (userWithTheSameEmail) {
      return res.status(400).json({
        errors: [
          {
            emailError: 'an account already exists with this email'
          }
        ]
      })
    }
    // if not

    //get image from gravatar
    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm'
    })
    const user = new User({
      username, email, password, avatar
    })

    //encrypt password
    const salt = await bcrypt.genSalt(10); //generate salt contains 10
    user.password = await bcrypt.hash(password, salt);

    //save user in database
    await user.save();

    //payload to generate token
    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET, {
      expiresIn: 360000 //to change for prod:3600
    }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    }
    );
  } catch (err) {
    console.log("server error");
    res.status(500).json({ message: err.message });
  }
})

//USER LOGIN
router.post('/login', [
  //validation for email and password
  check('email', 'please include a valid email').isEmail(),
  check('password', 'password is required').exists()
], async (req, res) => {
  //in case of error
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    })
  }
  //if ok
  const { email, password } = req.body;

  try {
    //find user 
    let user = await User.findOne({
      email
    })
    //if user not found in db
    if (!user) {
      return res.status(400).json({
        errors: [{
          message: 'invalid credentials'
        }]
      })
    }
    //if user is found : compare password
    const isMatching = await bcrypt.compare(password, user.password);

    //if password is incorrect
    if (!isMatching) {
      return res.status(400).json({
        errors: [{
          message: 'password is incorrect'
        }]
      })
    }
    //payload for jwt
    const payload = {
      user: {
        id: user.id
      }
    }
    jwt.sign(
      payload,
      process.env.JWT_SECRET, {
      expiresIn: 360000 //to change later
    }, (err, token) => {
      if (err) throw err;
      res.json({
        token
      })
    }
    )

  } catch (error) {
    console.log("server error");
    res.status(500).send(err.message)

  }
})

//GET USER INFOS
router.get('/', auth, async (req, res) => {
  try {
    //get user infos by id
    const user = await User.findById(req.user.id).select('-password')
    res.json(user)
  } catch (error) {
    console.log(err.message);
    res.status(500).send("server error");
  }
})


// ONLY FOR USER
// //GET ALL USERS
// router.get('/', async (req, res, next) => {
//   try{
//     const users = await User.find().sort({createdAt: 'desc'});
//     res.send(users);
//   } catch (err) {
//     res.status(500).json({message : err.message})
//   }
// });


//

// //UPDATE USER
// router.patch('/:id', async (req, res) => {

//   const updates = req.body
//   const id = req.params.id;
//   const options = {new: true};
//   try {
//     const updatedUser = await User.findByIdAndUpdate(id, updates, options)
//     res.send(updatedUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message })
//   }
// })

// //DELETE USER BY ID
// router.delete('/:id', getUser, async (req, res) => {
//   try {
//     await res.user.remove()
//     res.json({ message: 'Deleted user' })
//   } catch (err) {
//     res.status(500).json({ message: err.message })
//   }
// })
// //


async function getUser(req, res, next) {
  let user
  try {
    user = await User.findById(req.params.id)
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user with id ' + req.params.id })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

  res.user = user
  next()
}

module.exports = router;