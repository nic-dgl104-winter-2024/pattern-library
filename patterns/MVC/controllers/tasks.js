const Todo = require("../models/tasksModel");

// Controller methods for Todo model
const todoController = {
  // Get all Todo tasks
  getAllTodos: async (req, res) => {
    try {
      // Retrieve all Todo tasks from the database
      const todos = await Todo.find();
      // Respond with the list of Todo tasks
      res.json(todos);
    } catch (error) {
      // If an error occurs, respond with an error message
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = todoController;
