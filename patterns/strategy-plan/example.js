// Define authentication strategies
const basicAuthStrategy = {
    authenticate: function(username, password) {
      // Perform basic authentication logic
      return username === "admin" && password === "password";
    }
  };