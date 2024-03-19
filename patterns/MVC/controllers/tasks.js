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

  // Create a new Todo task
  createTodo: async (req, res) => {
    // Create a new Todo task object based on the request body
    const todo = new Todo({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      completed: req.body.completed || false,
    });
    try {
      // Save the new Todo task to the database
      const newTodo = await todo.save();
      // Respond with the newly created Todo task
      res.status(201).json(newTodo);
    } catch (error) {
      // If an error occurs, respond with an error message
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = todoController;
