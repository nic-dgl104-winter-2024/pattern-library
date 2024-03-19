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

  // Create a new category
  createCategory: async (req, res) => {
    // Create a new Category object based on the request body
    const category = new Category({
      name: req.body.name,
      description: req.body.description,
    });
    try {
      // Save the new category to the database
      const newCategory = await category.save();
      // Respond with the newly created category
      res.status(201).json(newCategory);
    } catch (error) {
      // If an error occurs, respond with an error message
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = categoryController;
