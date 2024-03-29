//Authentication model to authenticate user's credentials

const mongoose = require("mongoose");

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  // Username of the user
  username: {
    type: String,
    required: true, // Username is required
    unique: true, // Username must be unique
  },
  // Email of the user
  email: {
    type: String,
    required: true, // Email is required
    unique: true, // Email must be unique
  },
  // Password of the user
  password: {
    type: String,
    required: true, // Password is required
  },
  // Date and time when the user was created
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date and time
  },
});

// Create a model named 'User' using the schema
const User = mongoose.model("User", userSchema);

// Export the User model for use in other parts of the application
module.exports = User;
