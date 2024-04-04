<?php
include_once 'AuthenticationStrategy.php';

class SocialLoginStrategy implements AuthenticationStrategy {
    public function authenticate($username, $password) {
        // Mocking authentication logic for social login strategy
        // In a real-world scenario, this would involve integration with social login APIs
        if ($username === 'socialuser' && $password === 'socialpassword') {
            return true;
        } else {
            return false;
        }
    }
}
?>
