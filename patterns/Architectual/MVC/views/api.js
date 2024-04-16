// Import necessary modules
import axios from "axios"; // For making HTTP requests

// Create instance of axios with custom configuration
const api = axios.create({
  baseURL: "http://localhost:5000/api", //base url
  headers: {
    "Content-Type": "application/json", // Set content type header to JSON
  },
});

// Export the api instance
export default api;
