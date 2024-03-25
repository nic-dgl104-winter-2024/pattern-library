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

const permissionBasedAuthorizationStrategy = {
    authorize: function(user, permission) {
      // Perform permission-based authorization logic
      return user.permissions.includes(permission);
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
// Context class for authorization
class AuthorizationContext {
    constructor(strategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy) {
      this.strategy = strategy;
    }
  
    authorize(...args) {
      return this.strategy.authorize(...args);
    }
  }  

const authenticationContext = new AuthenticationContext(basicAuthStrategy);
console.log(authenticationContext.authenticate("admin", "password")); // Output: true

authenticationContext.setStrategy(oauthStrategy);
console.log(authenticationContext.authenticate("valid_token")); // Output: true

const authorizationContext = new AuthorizationContext(roleBasedAuthorizationStrategy);
const user = { role: "admin" };
console.log(authorizationContext.authorize(user, "admin")); // Output: true
console.log(authorizationContext.authorize(user, "user")); // Output: false

authorizationContext.setStrategy(permissionBasedAuthorizationStrategy);
user.permissions = ["read", "write"];
console.log(authorizationContext.authorize(user, "read")); // Output: true
console.log(authorizationContext.authorize(user, "delete")); // Output: false