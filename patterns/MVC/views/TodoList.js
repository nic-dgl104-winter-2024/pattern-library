// Import necessary modules
import React from "react"; // For React
import TodoItem from "./TodoItem"; // Import the TodoItem component

// TodoList component
function TodoList({ todos }) {
  // Render the list of todos
  return (
    <ul>
      {/* Map over todos array and render TodoItem component for each todo */}
      {todos.map((todo) => (
        <TodoItem key={todo._id} todo={todo} />
      ))}
    </ul>
  );
}

// Export the TodoList component
export default TodoList;
