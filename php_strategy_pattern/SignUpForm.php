<?php
class SignUpForm {
    public function handleSignup(User $user, $username, $password) {
        $user->signup($username, $password);
    }
}
?>
