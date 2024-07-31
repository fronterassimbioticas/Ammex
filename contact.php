<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: text/plain');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Log received data
    error_log(print_r($_POST, true));

    // Safely access POST data with default values
    $name = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
    $email = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
    $number = isset($_POST['number']) ? htmlspecialchars($_POST['number']) : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars($_POST['subject']) : '';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message']) : '';

    // Email configuration
    $to = 'fronterassimbioticas@gmail.com'; // Replace with your email address
    $subjectEmail = 'Contact Form Submission: ' . $subject; // Use subject field
    $body = "Name: $name\nEmail: $email\nContact No.: $number\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send email
    if (mail($to, $subjectEmail, $body, $headers)) {
        echo "Thank you for your message!";
    } else {
        echo "There was a problem sending your message.";
    }
} else {
    echo "Invalid request method.";
}
?>
