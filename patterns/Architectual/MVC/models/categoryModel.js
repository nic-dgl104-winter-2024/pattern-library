const mongoose = require("mongoose");

// Define the schema for the Category model
const categorySchema = new mongoose.Schema({
  // Name of the category
  name: {
    type: String,
    required: true, // Name is required
    unique: true, // Name must be unique
  },
  // Description of the category (optional)
  description: {
    type: String,
    default: "", // Default value is an empty string
  },
  // Date and time when the category was created
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date and time
  },
});

// Create a model named 'Category' using the schema
const Category = mongoose.model("Category", categorySchema);

// Export the Category model for use in other parts of the application
module.exports = Category;
