// Define authentication strategies
const basicAuthStrategy = {
    authenticate: function(username, password) {
      // Perform basic authentication logic
      return username === "admin" && password === "password";
    }
  };

// Context class for authentication
class AuthenticationContext {
    constructor(strategy) {
      this.strategy = strategy;
    }

    authenticate(...args) {
        return this.strategy.authenticate(...args);
    }
}