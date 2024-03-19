// Server file where all the requests from frontend (View part) will come

// Import required packages
const express = require("express"); // Express.js for server
const mongoose = require("mongoose"); // Mongoose for MongoDB connection
const bodyParser = require("body-parser"); // Body parser middleware for parsing request bodies
const cors = require("cors"); // CORS middleware for handling Cross-Origin Resource Sharing
const todoController = require("./controllers/tasks"); // Todo controller for handling Todo-related requests
const authController = require("./controllers/authentication"); // User controller for handling User-related requests
const categoryController = require("./controllers/category"); // Category controller for handling Category-related requests
