# Contributing to DGL104 pattern-library
Created a simple PHP implementation of the Strategy pattern for a user signup and login system. A use of a strategy pattern to define different authentication strategies (e.g., email/password, social login) that can be dynamically switched at runtime.

Here's how the project was structured:
index.php: The main entry point of the application.
strategies: Directory containing different authentication strategies.
AuthenticationStrategy.php: Interface defining the authenticate method.
EmailPasswordStrategy.php: Concrete strategy for email/password authentication.
SocialLoginStrategy.php: Concrete strategy for social login authentication.
User.php: Class representing a user with signup and login methods.
LoginForm.php: Class representing a login form.
SignUpForm.php: Class representing a signup form.
Let's start by defining the files and classes:

```
<?php
interface AuthenticationStrategy {
    public function authenticate($username, $password);
}
?>
```

Email and Password Authentication

```
<?php
include_once 'AuthenticationStrategy.php';

class EmailPasswordStrategy implements AuthenticationStrategy {
    public function authenticate($username, $password) {
        // Mocking authentication logic for email/password strategy
        if ($username === 'user@example.com' && $password === 'password') {
            return true;
        } else {
            return false;
        }
    }
}
?>
```

## Project Overview  
In this implementation:
We define the AuthenticationStrategy interface and concrete strategy classes EmailPasswordStrategy and SocialLoginStrategy within the strategies directory.
The User class represents a user with methods for setting the authentication strategy, signing up, and logging in.
The LoginForm and SignUpForm classes handle login and signup actions, respectively.
In index.php, we demonstrate how to use the Strategy pattern to switch between different authentication strategies (email/password and social login) dynamically.

## Prerequisites  
* PHP installed on your machine (version 7.0 or higher).
* Web server (e.g., Apache, Nginx) with PHP support.
* MySQL or another database system for storing user data.

## Ways to Contribute:  
There are several ways you can contribute to the DGL104 pattern library:  

1. **Reporting Bugs:** If you encounter any bugs or issues, please report them by creating a new issue.  
2. **Suggesting Enhancements:** Have ideas for new features or improvements? Feel free to open an issue to discuss.
3. **Writing Documentation:** Help us improve the project's documentation by fixing typos, adding clarification, or creating new content.
4. **Submitting Code Fixes:** Found a bug and know how to fix it? Send us a pull request with your code changes.
5. **Adding Features:** Want to add a new feature? Make sure to discuss it first by opening an issue, then submit a pull request with your implementation.
6. **Review issues:** Help us work on some pre-existing issues in the issues tab.

## Getting Started  
To start contributing, follow these steps:  
1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. create a new branch for your changes.
4. make your changes and commit them.
5. push your changes to the forked repository.
6. submit a pull request from your branch to the main repository's 'main' branch.

i. Clone or download the project from the repository.
ii. Set up a web server to run the PHP files.
iii. Update the database configuration in config.php file with your database credentials.
iv. Create the necessary database tables. You can use the following SQL script as a reference:

```
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    social_id VARCHAR(255),
    auth_strategy VARCHAR(50) NOT NULL
);
```
v. Start the web server and navigate to the project directory in your web browser.

## Code Style  
Followed PHP coding standards such as PSR-12 for code readability and consistency. Use meaningful variable and function names, proper indentation, and comments where necessary.

## Testing  
* Create a user account using the desired authentication strategy (email/password or social login).
* Log in using the created user account to test the authentication process.
* Verify that the correct authentication strategy is applied based on the user's choice.

## Code Review Process  
* Code Readability
Ensure variable and function names are descriptive and follow a consistent naming convention.
Use proper indentation and formatting to improve code readability.
```
// Good example of descriptive variable names and proper formatting
public function signup($username, $password, $email, $socialId) {
    // Method implementation
}
```
# Security
Sanitize user input to prevent SQL injection and other security vulnerabilities.
Use prepared statements when interacting with the database to avoid direct insertion of user-provided data into SQL queries.

```
// Example of using prepared statements to prevent SQL injection
$stmt = $pdo->prepare("INSERT INTO users (username, password, email, social_id) VALUES (?, ?, ?, ?)");
$stmt->execute([$username, $passwordHash, $email, $socialId]);
```

# Scalability
Ensure that the code is scalable and can handle a growing number of users and authentication strategies.
Consider modularizing the code further to accommodate future changes and additions.
```
// Example of modular code structure for authentication strategies
interface AuthStrategy {
    public function signup($username, $password, $email, $socialId);
    public function login($username, $password, $email, $socialId);
}
```

# Documentation
Include inline comments and documentation where necessary to explain complex logic and algorithms.
Update the README.md file with clear instructions for setting up and running the project.
```
// Example of inline comments for explaining code logic
public function login($username, $password, $email, $socialId) {
    // Check if the username and password match a user record in the database
    // ...
}
```
## Documentation  

## Translations  
Translations for the project are currently available in English only. We are working on adding support for other languages in future releases.

## Versioning
We follow semantic versioning for our project releases. The versioning format is MAJOR.MINOR.PATCH, where:
MAJOR version increases for incompatible API changes,
MINOR version increases for backward-compatible functionality additions, and
PATCH version increases for backwards-compatible bug fixes.
For more details, refer to our Versioning Policy.

## Continuous Integration/Continuous Development(CI/CD)
Used GitHub Actions for continuous integration and continuous deployment (CI/CD) processes. Our workflows include:
Automated testing on every push to the main branch
Code quality checks and linting
Deployment to staging and production environments
For CI/CD setup instructions, refer to our CI/CD Guide.

## Security
Security is a top priority for our project. We implement various security measures such as:
Secure password hashing using bcrypt
HTTPS for secure communication
Input validation and sanitization to prevent SQL injection and XSS attacks
Regular security audits and vulnerability assessments
For security best practices and guidelines, see our Security Policy.

## Licensing  

## Acknowledgments
I would like to acknowledge the following individuals and resources for their contributions and inspiration:
* Basit, Swathy for the initial project idea.
* Refactoring Guru for design pattern insights
* DigitalOcean tutorials for PHP best practices

## Code of Conduct 

## External Resources
For further learning and references, check out the following external resources:
PHP Manual
Symfony Security Component
OWASP PHP Security Cheat Sheet

## FAQs
* How do I add a new authentication strategy?
To add a new authentication strategy, follow these steps:

* Create a new PHP class that implements the AuthStrategy interface.
* Define the signup and login methods in your new class to handle the authentication logic.
Update the User class to use your new strategy by calling setAuthStrategy with an instance of your strategy class.
```
Example code for a custom authentication strategy:
class CustomAuthStrategy implements AuthStrategy {
    public function signup($username, $password, $email, $socialId) {
        // Custom signup logic
    }

    public function login($username, $password, $email, $socialId) {
        // Custom login logic
    }
}
```
Then, in your main PHP file:
```
$user = new User($username, $password, $email, $socialId);
$user->setAuthStrategy(new CustomAuthStrategy());
$user->signup();
```

# How can I contribute to the project?
We welcome contributions from the community! To contribute, follow these steps:
* Fork the repository and create a new branch for your changes.
* Make your changes, ensuring adherence to coding standards and documentation guidelines.
* Submit a pull request with a clear description of your changes and the problem they solve.
