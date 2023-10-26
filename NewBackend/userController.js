const userModel = require('../models/userModel'); // Import the user model

// Create a new user
exports.createUser = (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new userModel({
    name,
    email,
    password,
  });

  newUser.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: 'Error creating user',
      });
    }
    res.json(user);
  });
};

// Get a user by ID
exports.getUserById = (req, res) => {
  const userId = req.params.id;

  userModel.findById(userId, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    res.json(user);
  });
};

// Get all users
exports.getAllUsers = (req, res) => {
  userModel.find((err, users) => {
    if (err) {
      return res.status(400).json({
        error: 'Users not found',
      });
    }
    res.json(users);
  });
};

// Update a user by ID
exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  userModel.findByIdAndUpdate(userId, { name, email, password }, { new: true }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    res.json(user);
  });
};

// Delete a user by ID
exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  userModel.findByIdAndRemove(userId, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found',
      });
    }
    res.json({ message: 'User deleted successfully' });
  });
};
