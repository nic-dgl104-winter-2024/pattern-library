// Import necessary modules
import React from "react"; // For React
import api from "./api"; // Import the API service

// TodoItem component
function TodoItem({ todo }) {
  // Function to handle update button click
  const handleUpdate = async () => {
    try {
      // Make API request to update the todo item
      await api.put(`/todos/${todo._id}`, { completed: !todo.completed });
      // Show updation message on console
      console.log("Task updated successfully !!");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  // Function to handle delete button click
  const handleDelete = async () => {
    try {
      // Make API request to delete the todo item
      await api.delete(`/todos/${todo._id}`);
      // Show delete message on console
      console.log("Task deleted successfully !!");
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

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
