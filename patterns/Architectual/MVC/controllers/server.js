// Server file where all the requests from frontend (View part) will come

// Import required packages
const express = require("express"); // Express.js for server
const mongoose = require("mongoose"); // Mongoose for MongoDB connection
const bodyParser = require("body-parser"); // Body parser middleware for parsing request bodies
const cors = require("cors"); // CORS middleware for handling Cross-Origin Resource Sharing
const todoController = require("./controllers/tasks"); // Todo controller for handling Todo-related requests
const authController = require("./controllers/authentication"); // User controller for handling User-related requests
const categoryController = require("./controllers/category"); // Category controller for handling Category-related requests

// Initialize express app
const app = express();

// Middleware
// Parse JSON bodies of incoming requests
app.use(bodyParser.json());
// Enable CORS for all requests
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/todo_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// if there is an error while connecting  to DB then print it on console and stop the execution of application
db.on("error", console.error.bind(console, "MongoDB connection error:"));

// Routes

// Tasks routes

// Get all tasks
app.get("/api/todos", todoController.getAllTodos);
// Create a new task
app.post("/api/todos", todoController.createTodo);
// Update a task by ID
app.put("/api/todos/:id", todoController.updateTodo);
// Delete a task by ID
app.delete("/api/todos/:id", todoController.deleteTodo);

// Authentication routes

// Register a new user
app.post("/api/register", authController.registerUser);
// Login an existing user
app.post("/api/login", authController.loginUser);
// Logout an existing user
app.post("/api/logout", authController.logoutUser);

// Category routes

// Get all categories
app.get("/api/categories", categoryController.getAllCategories);
// Create a new category
app.post("/api/categories", categoryController.createCategory);
// Add more category routes as needed

// Start the server
const PORT = process.env.PORT || 5000; // Use the specified port or default to 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
