const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const User = require('../models/User')
const jwt = require('jsonwebtoken');

function generateToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
}

router.post('/register', register);
router.post('/login', login);


// POST /api/auth/auth0
router.post('/auth0', async (req, res) => {
  const { email } = req.body;
  try {
    // Check if user exists, else create a new one
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email });
      await user.save();
    }

    // Generate a token
    const token = generateToken(user._id);
    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Auth0 login failed' });
  }
});

module.exports = router;