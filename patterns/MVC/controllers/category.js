const Category = require("../models/categoryModel");

// Controller methods for Category model
const categoryController = {
  // Get all categories
  getAllCategories: async (req, res) => {
    try {
      // Retrieve all categories from the database
      const categories = await Category.find();
      // Respond with the list of categories
      res.json(categories);
    } catch (error) {
      // If an error occurs, respond with an error message
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = categoryController;
