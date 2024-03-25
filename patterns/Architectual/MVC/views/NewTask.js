// Import necessary modules
import React, { useState } from "react"; // For React
import api from "../services/api"; // Import the API service
import { useNavigate } from "react-router-dom"; // For navigation

// NewTask component
function NewTask() {
  // Define state to store task details
  const [title, setTitle] = useState(""); // State for task title
  const [description, setDescription] = useState(""); // State for task description
  const [category, setCategory] = useState(""); // State for task category

  // Hook to navigate to a different route
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Set completed status to false for new task
      const completed = false;

      // Make API request to create a new task
      await api.post("/todos", {
        title,
        description,
        category,
        completed, // Include completed status in the request
      });

      // Redirect user to TodoPage after successful creation
      navigate("/todo");
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  // Render the NewTask form
  return (
    <div>
      <h1>Create New Task</h1>
      {/* Form for creating a new task */}
      <form onSubmit={handleSubmit}>
        {/* Input field for task title */}
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required // Make title field required
          />
        </div>
        {/* Textarea for task description */}
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* Input field for task category */}
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        {/* Submit button */}
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}

// Export the NewTask component
export default NewTask;
