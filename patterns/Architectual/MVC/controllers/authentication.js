const User = require("../models/authenticationModel");

// Controller methods for User model
const userController = {
  // Register a new user
  registerUser: async (req, res) => {
    // Create a new User object based on the request body
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    try {
      // Save the new user to the database
      const newUser = await user.save();
      // Respond with the newly created user
      res.status(201).json(newUser);
    } catch (error) {
      // If an error occurs, respond with an error message
      res.status(400).json({ message: error.message });
    }
  },

  // Login user
  loginUser: async (req, res) => {
    try {
      // Find user by email
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      // Check password
      const isValidPassword = await user.comparePassword(req.body.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      // Respond with user data
      res.json({ message: "Login successful", user });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Logout user
  logoutUser: async (req, res) => {
    // In this example, assume the User model has a method to end the user's session
    try {
      const logout = await User.findOne({ email: req.body.email });
      if (logout) {
        // Here, i'm assuming a function to end user's session from database
        endSession();

        // If logout is successful, respond with a success message
        res.json({ message: "Logout successful" });
      } else {
        // If logout is not successful, throw an error
        throw new Error("some internal error occurred, please try again !!");
      }
    } catch (error) {
      // If an error occurs during logout, respond with an error message
      res.json({
        message: `Logout unsuccessful, ${error.message} `,
      });
    }
  },
};

module.exports = userController;
