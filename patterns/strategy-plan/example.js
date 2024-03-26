// Define authentication strategies
const basicAuthStrategy = {
    // Function to perform basic authentication logic
    authenticate: function(username, password) {
      // Check if username and password match predefined credentials
      return username === "admin" && password === "password";
    }
};

const oauthStrategy = {
    // Function to perform OAuth authentication logic
    authenticate: function(token) {
      // Check if token is valid
      return token === "valid_token";
    }
};

// Define authorization strategies
const roleBasedAuthorizationStrategy = {
    // Function to perform role-based authorization logic
    authorize: function(user, role) {
      // Check if user's role matches the specified role
      return user.role === role;
    }
};

const permissionBasedAuthorizationStrategy = {
    // Function to perform permission-based authorization logic
    authorize: function(user, permission) {
      // Check if user has the specified permission
      return user.permissions.includes(permission);
    }
};

// Context class for authentication
class AuthenticationContext {
    constructor(strategy) {
      // Initialize with the specified authentication strategy
      this.strategy = strategy;
    }

    // Method to set authentication strategy dynamically
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    
    // Method to authenticate using the current strategy
    authenticate(...args) {
        // Delegate authentication to the current strategy
        return this.strategy.authenticate(...args);
    }
}

// Context class for authorization
class AuthorizationContext {
    constructor(strategy) {
      // Initialize with the specified authorization strategy
      this.strategy = strategy;
    }

    // Method to set authorization strategy dynamically
    setStrategy(strategy) {
      this.strategy = strategy;
    }

    // Method to authorize using the current strategy
    authorize(...args) {
      // Delegate authorization to the current strategy
      return this.strategy.authorize(...args);
    }
}

// Create an instance of AuthenticationContext with basic authentication strategy
const authenticationContext = new AuthenticationContext(basicAuthStrategy);
console.log(authenticationContext.authenticate("admin", "password")); // Output: true (valid authentication)

// Switch to OAuth authentication strategy
authenticationContext.setStrategy(oauthStrategy);
console.log(authenticationContext.authenticate("valid_token")); // Output: true (valid authentication)

// Create an instance of AuthorizationContext with role-based authorization strategy
const authorizationContext = new AuthorizationContext(roleBasedAuthorizationStrategy);
const user = { role: "admin" };
console.log(authorizationContext.authorize(user, "admin")); // Output: true (authorized as admin)
console.log(authorizationContext.authorize(user, "user")); // Output: false (not authorized as user)

// Switch to permission-based authorization strategy
authorizationContext.setStrategy(permissionBasedAuthorizationStrategy);
user.permissions = ["read", "write"];
console.log(authorizationContext.authorize(user, "read")); // Output: true (authorized to read)
console.log(authorizationContext.authorize(user, "delete")); // Output: false (not authorized to delete)
