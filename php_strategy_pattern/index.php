<?php
include_once 'User.php';
include_once 'strategies/EmailPasswordStrategy.php';
include_once 'strategies/SocialLoginStrategy.php';
include_once 'LoginForm.php';
include_once 'SignUpForm.php';

// Create user instance
$user = new User();

// Set email/password authentication strategy
$user->setAuthenticationStrategy(new EmailPasswordStrategy());

// Handle login using email/password
$loginForm = new LoginForm();
$loginForm->handleLogin($user, 'user@example.com', 'password');

// Set social login authentication strategy
$user->setAuthenticationStrategy(new SocialLoginStrategy());

// Handle login using social login
$loginForm->handleLogin($user, 'socialuser', 'socialpassword');

// Handle signup
$signupForm = new SignUpForm();
$signupForm->handleSignup($user, 'newuser@example.com', 'newpassword');
?>
