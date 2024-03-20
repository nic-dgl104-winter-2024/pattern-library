// Import necessary modules
import React from "react"; // For React
import api from "../api"; // Import the API service

// TodoItem component
function TodoItem({ todo }) {
  // Render individual todo item
  return (
    <li>
      {/* Display todo details */}
      <input type="checkbox" checked={todo.completed} />
      <span>{todo.title}</span>
      {/* Attach event handlers to Edit and Delete buttons */}
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

// Export the TodoItem component
export default TodoItem;
