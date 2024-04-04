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


## Project Overview  

## Prerequisites  

## Ways to Contribute:  
There are several ways you can contribute to the DGL104 pattern-library:  

1. **Reporting Bugs:** If you encounter any bugs or issues, please report them by creating a new issue.  
2. **Suggesting Enhancements:** Have ideas for new features or improvements? Feel free to open an issue to discuss.
3. **Writing Documentation:** Help us improve the project's documentation by fixing typos, adding clarification, or creating new content.
4. **Submitting Code Fixes:** Found a bug and know how to fix it? Send us a pull request with your code changes.
5. **Adding Features:** Want to add a new feature? Make sure to discuss it first by openeing an issue, then submit a pull request with your implementation.
6. **Review issues:** Help us work on some pre existing issues in the issues tab.

## Getting Started  
To start contributing, follow these steps:  

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. create a new branch for your changes.
4. make your changes and commit them.
5. push your changes to the forked repository.
6. submit a pull request from your branch to the main repository's 'main' branch.

## Code Style  

## Testing  

## Code Review Process  

## Documentation  

## Translations  

## Versioning

## Continuous Intergration/Continuous Development(CI/CD)

## Security

## Licensing  

## Acknowledgments

## Code of Conduct 

## External Resources

## FAQs


