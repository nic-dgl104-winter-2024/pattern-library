// Import necessary modules
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // For routing
import Todo from "./Todo"; // Import the TodoPage component
import Login from "./Login"; // Import the LoginPage component
import Register from "./Register"; // Import the Register component
import NewTask from "./NewTask"; // Import the NewTask component

// App component
function App() {
  // Render the app
  return (
    <Router>
      {/* Set up routes for different pages */}
      <Switch>
        {/* Route to LoginPage */}
        <Route exact path="/" component={Login} />{" "}
        <Route exact path="/register" component={Register} />{" "}
        <Route exact path="/todo" component={Todo} />{" "}
        <Route exact path="/newtask" component={NewTask} />{" "}
        {/* Route to TodoPage */}
      </Switch>
    </Router>
  );
}

// Export the App component
export default App;
