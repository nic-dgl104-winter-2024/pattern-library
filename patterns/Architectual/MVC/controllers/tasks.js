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

  // Update a Todo task
  updateTodo: async (req, res) => {
    try {
      // Find the Todo task by ID
      const todo = await Todo.findById(req.params.id);
      if (todo == null) {
        // If the Todo task is not found, respond with a 404 error
        return res.status(404).json({ message: "Todo not found" });
      }
      // Update the Todo task properties based on the request body
      if (req.body.title != null) {
        todo.title = req.body.title;
      }
      if (req.body.description != null) {
        todo.description = req.body.description;
      }
      if (req.body.category != null) {
        todo.category = req.body.category;
      }
      if (req.body.completed != null) {
        todo.completed = req.body.completed;
      }
      // Save the updated Todo task to the database
      const updatedTodo = await todo.save();
      // Respond with the updated Todo task
      res.json(updatedTodo);
    } catch (error) {
      // If an error occurs, respond with an error message
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a Todo task
  deleteTodo: async (req, res) => {
    try {
      // Find the Todo task by ID
      const todo = await Todo.findById(req.params.id);
      if (todo == null) {
        // If the Todo task is not found, respond with a 404 error
        return res.status(404).json({ message: "Todo not found" });
      }
      // Remove the Todo task from the database
      await todo.remove();
      // Respond with a success message
      res.json({ message: "Todo deleted" });
    } catch (error) {
      // If an error occurs, respond with an error message
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = todoController;
