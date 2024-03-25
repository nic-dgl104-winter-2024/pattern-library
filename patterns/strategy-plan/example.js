// Define authentication strategies
const basicAuthStrategy = {
    authenticate: function(username, password) {
      // Perform basic authentication logic
      return username === "admin" && password === "password";
    }
  };

const oauthStrategy = {
    authenticate: function(token) {
      // Perform OAuth authentication logic
      return token === "valid_token";
    }
  };

// Define authorization strategies
const roleBasedAuthorizationStrategy = {
    authorize: function(user, role) {
      // Perform role-based authorization logic
      return user.role === role;
    }
  };

// Context class for authentication
class AuthenticationContext {
    constructor(strategy) {
      this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
      }
    
    authenticate(...args) {
        return this.strategy.authenticate(...args);
    }
}

const authenticationContext = new AuthenticationContext(basicAuthStrategy);
console.log(authenticationContext.authenticate("admin", "password")); // Output: true

authenticationContext.setStrategy(oauthStrategy);
console.log(authenticationContext.authenticate("valid_token")); // Output: true