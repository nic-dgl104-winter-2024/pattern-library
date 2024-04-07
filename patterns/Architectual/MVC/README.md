# MVC ( model-view-controller) Architecture

In programming, model-view-controller (MVC) is an architectural design pattern that organizes an application's logic into distinct layers, each of which carries out a specific set of tasks. The layers also interact with each other to ensure that the application's functionality is delivered in a coordinated and consistent manner. The MVC methodology incorporates the entire application, from the user interface (UI) to the underlying data model. The three layers of MVC architecure are -

- Model : Manages the application's data and business logic, including data validation, manipulation, and interaction with the database.
- View : Presents the user interface to the user, rendering data received from the Model layer in a format suitable for presentation.
- Controller : Interprets user input from the View layer, processes it, and interacts with the Model layer to retrieve or manipulate data accordingly.



*Sheldon, Robert. “What Is Model-View-Controller (MVC)?: Definition from TechTarget.” WhatIs, TechTarget, 12 Sept. 2023, [techtarget.com](www.techtarget.com/whatis/definition/model-view-controller-MVC#:~:text=In%20programming%2C%20model%2Dview%2D,a%20specific%20set%20of%20tasks)*

# Visual representation of MVC architecture

![image](https://github.com/YogeshManni/pattern-library/assets/29475936/96056260-a719-4651-bee0-685ce6390af8)

*sadikarahmantanisha, "the-mvc-architecture", medium.com,19 Sept. 2023, [MVC architecture](https://medium.com/@sadikarahmantanisha/the-mvc-architecture-97d47e071eb2)*

---

## Advantages of MVC

- **Separation of Concerns**: MVC separates the application into distinct components, making it easier to understand, maintain, and modify.
- **Modular Design**: Each component of MVC can be developed and tested independently, allowing for greater flexibility and reusability.
- **Scalability**: MVC facilitates the scalability of the application by allowing developers to add new features or modify existing ones without affecting other parts of the application.

---

# MVC Architecture in Todo Task List Application

For this issue, I will be explaining MVC architecture by writing code for to-do task list application. The Tech stack that I will be using is


- [Mongodb and Javascript - For Model part (Database)](https://www.mongodb.com/)
- [React - For View Part](https://react.dev/learn)
- [Node.js - For Controller part](https://nodejs.org/en)


# Folder Structure

```
    MVC
    |-- controllers                   # Controllers directory
    |   |-- authentication.js         # Controller for authentication-related requests
    |   |-- category.js               # Controller for category-related requests
    |   |-- server.js                 # Main entry point for backend server
    |   |-- tasks.js                  # Controller for todo task-related requests
    |
    |-- models                        # Models directory
    │   |-- authenticationModel.js    # Model for authentication operations
    │   |-- categoryModel.js          # Model for category operations
    │   |-- tasksModel.js             # Model for todo task operations
    │
    │-- views                          # Views directory
    |   |-- api.js                    # Service for making API requests
    |   |-- App.js                    # Main component for frontend React application
    |   |-- Login.js                  # View component for login page
    |   |-- NewTask.js                # View component for creating a new task
    |   |-- Register.js               # View component for registration page
    |   |-- Todo.js                   # View component for main todo task list page
    |   |-- TodoItem.js               # View component for rendering an individual todo task
    |   │-- TodoList.js               # Component for rendering the list of todo tasks
```
---

The Todo Task List application follows the MVC (Model-View-Controller) architecture, which is a software design pattern commonly used in web development and for other platforms as well. MVC separates the application into three interconnected components, each with its own distinct responsibilities:

## Model

The **Model** represents the application's data and business logic. In the Todo Task List application, the Model is responsible for defining the data structure of todo tasks and interacting with the database. The Model ensures that data is stored, retrieved, and manipulated in a consistent and reliable manner.

### Example Model File:

Below given is the tasksModel.js file which represent the Model structure for each task in to-do list. Each task will have following properties -

- title
- description
- category
- completed
- createdAt

Thus these properties make structure for an individual task which we call a model.

```javascript
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
```

The complete file of this example is available [here](https://github.com/YogeshManni/pattern-library/blob/main/patterns/MVC/models/tasksModel.js)

<br>

*Mongoose, "Schemas", mongoosejs.com, Jan. 2024, [Mongoose Schema](https://mongoosejs.com/docs/guide.html)*

---

## View

The **View** is responsible for rendering the user interface and presenting data to the user. In the Todo Task List application, the View consists of React components that display todo tasks and allow users to interact with them. The View receives data from the Model and presents it in a visually appealing and intuitive way.

### Example View File:

Below given is the Todo.js File from the View part which displays all the available tasks to the browser screen. Here we fetch all the tasks by making an request to the controller through an api which on successful operation return all the available tasks.

```javascript
// Import necessary modules
import React, { useState, useEffect } from "react"; // For React hooks
import TodoList from "./TodoList"; // Import the TodoList component
import api from "./api"; // Import the API service

// TodoPage component
function Todo() {
  // Define state to store todos
  const [todos, setTodos] = useState([]);

  // Effect hook to fetch todos when the component mounts
  useEffect(() => {
    // Fetch todos from the API
    const fetchTodos = async () => {
      try {
        // Make API request to fetch todos
        const response = await api.get("/todos");
        // Update state with fetched todos
        setTodos(response.data);
      } catch (error) {
        // Handle error if fetching todos fails
        console.error("Error fetching todos:", error);
      }
    };
    // Call fetchTodos function
    fetchTodos();
  }, []); // Empty dependency array ensures the effect runs only once

  // Render the TodoPage
  return (
    <div>
      <Link to="/newtask">
        {" "}
        <button> + Create new Task </button>
      </Link>
      {/* Render TodoList component and pass todos as prop */}
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
}

// Export the TodoPage component
export default Todo;
```
The complete file of this example is available [here](https://github.com/YogeshManni/pattern-library/blob/main/patterns/MVC/views/Todo.js)

<br>

*React community, "Your First Component", react.dev, Feb. 2024, [React components](https://react.dev/learn/your-first-component)*

---

## Controller

The **Controller** acts as an intermediary between the Model and the View. It receives user input and translates it into actions to be performed by the Model or View. In the Todo Task List application, the Controller handles incoming HTTP requests, processes data, and sends responses. It organize the flow of data between the Model and the View, ensuring that the application behaves as expected.

### Example Controller File:

In this example, I have displayed certain part of tasks.js controller where on user request, controller fetchs all tasks from database and return back to view part from where the request came.
In this example there are two methods listed -

- getAllTodos - This method fetchs all the tasks from database and return them to view.
- createTodo - This method create a new task in database based on the information provided by view part.

_Note_ - The entry point of controller is [Server.js](https://github.com/YogeshManni/pattern-library/blob/main/patterns/MVC/controllers/server.js) file, from there the request comes to the corresponding controller file.

```javascript

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

```

The complete file of this example is available [here](https://github.com/YogeshManni/pattern-library/blob/main/patterns/MVC/controllers/tasks.js)

<br>

*MDN contributors, "Routes and controllers", developer.mozilla.org, 18 Oct. 2023, [Node Express](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes)*

---

## Commands to run the project files


### For View (React) part

Firstly you have to make sure you have Node.js installed on your computer, if not you can install it from [here](https://nodejs.org/en/download/current).

After Node installation, create a new React app by using the following command - 

```
npx create-react-app todo-list
```
After that, you can copy the view files to your `src` folder in the project. Before running application you have to install all node dependencies as well, for that you can use below command - 

```
npm install
```
Once all node dependencies are install, you can now run the react application with following command - 

```
npm start
```
If everything works and your code gets compiled, you can see you website live on `http://localhost:3000/`

<br>

*Luke Karrys, "Create React App", create-react-app.dev, 09 jan. 2021, [Getting Started](https://create-react-app.dev/docs/getting-started)*

---

### For Controller part

To run server files you need Node.js install on your computer. After installation create a new folder and run the following command inside it to create new Node.js project - 

```
npm init
```
This above command will initalize nodejs project, after that you can install all the node dependencies using following command - 

```
npm install
```
Finally, you can run your server by following command - 

```
npm run start
```
Or you can run a particular file by mentioning its name. For example if I want to run server.js, I will run it by using following command - 

```
node server.js
```

If everything works out and your code compile successfully, you will see success message and your server will be running at `http://localhost:5000/`

<br>

*Mohammed Ibrahim, "Node.js: Step-by-Step", medium.com, 05 Nov. 2023, [Node.js Guide](https://medium.com/@ibrahimhz/creating-your-first-backend-with-node-js-step-by-step-guide-892769af4cb0)*

-----------------------------------------------

## How It Works

1. **User Interaction**: The user interacts with the View, such as creating, updating, or deleting todo tasks.
2. **Controller Handling**: The View sends user input to the Controller, which determines the appropriate action to take based on the input.
3. **Data Processing**: The Controller interacts with the Model to perform operations on the data, such as creating, updating, or deleting todo tasks in the database.
4. **Response Rendering**: Once the Model has processed the data, the Controller sends the updated data to the View for rendering.
5. **User Interface Update**: The View updates the user interface to reflect the changes made to the data.

---

## Todo Task List Project Architecture

The Todo Task List project follows the MVC (Model-View-Controller) architecture and the work flow is explained below -

### User Interaction

Users interact with the frontend (React) application by navigating through different pages, filling out forms, and performing actions such as creating, updating, or deleting todo tasks.

### View Rendering

Frontend components (`App.js`, `Login.js`, `Todo.js`, etc.) render the user interface elements based on the current state and data received from the backend.

### API Interaction

React components make API requests to the backend server using the `api.js` service file. These requests are sent to the appropriate backend endpoints based on the user's actions.

### Controller Handling

When the backend server receives an API request, it routes the request to the appropriate controller for processing through (`Server.js`). Each controller (`tasks.js`, `category.js`, `authentication.js`) handles a specific type of request related to todo tasks, categories, or authentication.

### Data Processing

The controller processes the incoming request, extracts relevant data, and interacts with the corresponding model file to perform CRUD(create, read, update and delete) operations on the database. For example, when creating a new todo task, the `tasks.js` controller interacts with the `tasksModel.js` model to insert the task data into the database.

### Database Interaction

The model file interacts with the database to perform CRUD operations. It validates incoming data, executes database queries, and returns the results back to the controller.

### Response Rendering

Once the CRUD operation is completed, the controller sends a response back to the frontend React application. This response may include updated data, error messages, or success indicators.

### View Update

The React components receive the response from the backend and update the user interface accordingly. For example, if a new todo task is successfully created, the task will be added to the list of tasks displayed on the frontend.

### User Feedback

The updated user interface provides feedback to the user, indicating the success or failure of their actions. For example, if an error occurs during the creation of a new task, an error message will be displayed to the user, informing them of the issue.

### Continued Interaction

The user can continue to interact with the application, performing additional actions such as updating existing tasks, deleting tasks, or navigating to different pages.

This flow ensures that the Todo Task List application functions smoothly, with data being transferred between the frontend and backend, and CRUD operations being performed accurately and efficiently, following the MVC architecture principles.

---

_Note_ - Please go through all the files in [MVC](https://github.com/YogeshManni/pattern-library/tree/main/patterns/MVC) folder , I have commented them properly for better understanding. It will help you understand work flow more efficiently.

## Conclusion

The MVC architecture plays a crucial role in the development of the Todo Task List application, providing a structured and organized approach to building web applications. By separating the application into Models, Views, and Controllers, MVC promotes code reusability, maintainability, and scalability, ultimately enhancing the overall quality and performance of the application.


   
    
   
