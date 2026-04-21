<?php
include "db.php";

$id = $_GET['id'];

if (isset($_POST['update'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];

    $stmt = $conn->prepare("UPDATE users SET name=?, email=? WHERE id=?");
    $stmt->bind_param("ssi", $name, $email, $id);
    $stmt->execute();

    header("Location: index.php");
}

$data = mysqli_fetch_assoc(mysqli_query($conn, "SELECT * FROM users WHERE id=$id"));
?>

<form method="post">
    <input type="text" name="name" value="<?= $data['name']; ?>"><br><br>
    <input type="email" name="email" value="<?= $data['email']; ?>"><br><br>
    <button name="update">Update</button>
</form>