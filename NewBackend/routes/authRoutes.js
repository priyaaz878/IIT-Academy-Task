const express = require('express');
const router = express.Router();
const userModel = require('../models/userModel');
const { hashpassword, comparePassword } = require('../helpers/authHelper');
const JWT = require('jsonwebtoken');

// Register a new user
router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, password, address, answer } = req.body;

    // Validation for required fields
    if (!name || !email || !phone || !password || !address || !answer) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if the email is already registered
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(200).json({
        success: false,
        message: 'User already registered. Please login.',
      });
    }

    // Hash the user's password
    const hashedPassword = await hashpassword(password);

    // Create a new user
    const user = new userModel({ name, email, phone, password: hashedPassword, address, answer });
    await user.save();

    // Generate a JWT token for the new user
    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Error in registration',
      error: error.message,
    });
  }
});

// Login
router.post('/login', async (req, res) => {
  // Authentication logic similar to your existing loginController
  // ...

  // If login is successful, return a JWT token
  const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

  // Return the token and user information
  res.status(200).json({
    success: true,
    message: 'Login successful',
    user: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      role: user.role,
    },
    token,
  });
});

// Forgot Password
router.post('/forgotpassword', async (req, res) => {
  // Password reset logic similar to your existing forgotPasswordController
  // ...

  // Return a success message
  res.status(200).json({
    success: true,
    message: 'Password reset successfully',
  });
});

module.exports = router;

