<?php
include_once 'strategies/AuthenticationStrategy.php';

class User {
    private $authenticationStrategy;

    public function setAuthenticationStrategy(AuthenticationStrategy $strategy) {
        $this->authenticationStrategy = $strategy;
    }

    public function signup($username, $password) {
        // Mocking signup logic
        echo "User signed up successfully.\n";
    }

    public function login($username, $password) {
        // Using the selected authentication strategy to authenticate
        if ($this->authenticationStrategy->authenticate($username, $password)) {
            echo "User logged in successfully.\n";
        } else {
            echo "Login failed. Invalid credentials.\n";
        }
    }
}
?>
