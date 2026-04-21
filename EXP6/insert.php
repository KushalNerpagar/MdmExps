<?php
include "db.php";

if (isset($_POST['submit'])) {

    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $pass = password_hash($_POST['password'], PASSWORD_DEFAULT);

    if (!empty($name) && !empty($email)) {

        $stmt = $conn->prepare("INSERT INTO users(name,email,password) VALUES(?,?,?)");
        $stmt->bind_param("sss", $name, $email, $pass);
        $stmt->execute();

        header("Location: index.php");
    } else {
        echo "All fields required!";
    }
}
?>

<form method="post">
    <input type="text" name="name" placeholder="Enter Name"><br><br>
    <input type="email" name="email" placeholder="Enter Email"><br><br>
    <input type="password" name="password" placeholder="Enter Password"><br><br>
    <button name="submit">Add User</button>
</form>