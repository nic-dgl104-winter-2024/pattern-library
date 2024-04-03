const mongoose = require("mongoose");

// Define the schema for the Todo model
const todoSchema = new mongoose.Schema({
  // Title of the Todo task
  title: {
    type: String,
    required: true, // Title is required
  },
  // Description of the Todo task (optional)
  description: {
    type: String,
    default: "", // Default value is an empty string
  },
  // Name of the category
  category: {
    type: String,
    required: true, // category is required
  },
  // Indicates whether the Todo task is completed or not
  completed: {
    type: Boolean,
    default: false, // Default value is false (not completed)
  },
  // Date and time when the Todo task was created
  createdAt: {
    type: Date,
    default: Date.now, // Default value is the current date and time
  },
});

// Create a model named 'Todo' using the schema
const Todo = mongoose.model("Todo", todoSchema);

// Export the Todo model for use in other parts of the application
module.exports = Todo;
