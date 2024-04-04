<?php
interface AuthenticationStrategy {
    public function authenticate($username, $password);
}
?>
