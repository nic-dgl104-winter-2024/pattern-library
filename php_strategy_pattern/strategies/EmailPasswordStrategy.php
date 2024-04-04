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
