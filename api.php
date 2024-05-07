<?php

// Include your database configuration
include 'Config.php';

// Establish a database connection
$conn = new mysqli($localhost, $root, $Baba@999, $first_db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Perform database operations as needed

// Close the database connection
$conn->close();

// Example response
echo json_encode(['message' => 'Hello from the backend!']);
?>
