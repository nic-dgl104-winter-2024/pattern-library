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
