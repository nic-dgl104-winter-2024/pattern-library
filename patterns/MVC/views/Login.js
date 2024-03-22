// Import necessary modules
import React, { useState } from "react"; // For React
import api from "./api"; // Import the API service
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// LoginPage component
function Login() {
  const navigate = useNavigate();
  // Define state to store input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make login request with email and password
      const response = await api.post("/login", { email, password });
      navigate("/todo");
    } catch (error) {
      // Handle login failure
      console.error("Login failed:", error);
    }
  };

  // Render the LoginPage
  return (
    <form onSubmit={handleSubmit}>
      {/* Render input fields for email and password */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button type="submit">Login</button>
      <span>
        Not have an account
        <Link to="/register">Register here</Link>
      </span>
    </form>
  );
}

// Export the LoginPage component
export default Login;
