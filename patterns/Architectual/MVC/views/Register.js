// frontend/src/components/RegisterForm.js

// Import necessary modules
import React, { useState } from "react"; // For React
import api from "../services/api"; // Import the API service

// RegisterForm component
function Register() {
  // Define state to store input values
  const [username, setUsername] = useState(""); // State for username
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Make registration request with username, email, and password
      const response = await api.post("/register", {
        username,
        email,
        password,
      });
      console.log(response.data); // Log response data to console
      // Optionally, redirect user to login page or display success message
    } catch (error) {
      // Handle registration failure
      console.error("Registration failed:", error);
      // Optionally, display error message to user
    }
  };

  // Render the RegisterForm
  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for username */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      {/* Input field for email */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      {/* Input field for password */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      {/* Submit button */}
      <button type="submit">Register</button>
      <span>
        Already have an account,
        <Link to="/login">Login here</Link>
      </span>
    </form>
  );
}

// Export the RegisterForm component
export default Register;
