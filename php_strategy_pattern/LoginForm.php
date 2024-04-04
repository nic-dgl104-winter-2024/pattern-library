<?php
class LoginForm {
    public function handleLogin(User $user, $username, $password) {
        $user->login($username, $password);
    }
}
?>
