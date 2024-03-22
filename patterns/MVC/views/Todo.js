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
