<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "myshop";

function connect(){
    $conn = mysqli_connect("localhost", "root", "root", "myshop");
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $conn;
}

function init(){
    //вывожу список товаров
    $conn = connect();
    $sql = "SELECT * FROM items";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        echo json_encode($out);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function selectOneItem() {
    $conn = connect();
    $id = $_POST['itemId'];
    $sql = "SELECT * FROM items WHERE id = '$id'";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_assoc($result);
        echo json_encode($row);
    } else {
        echo "0";
    }
    mysqli_close($conn);
}

function updateItems() {
    $conn = connect();
    $id = $_POST['id'];
    $name = $_POST['itemName'];
    $cost = $_POST['itemCost'];
    $desc = $_POST['itemDesc'];
    $img = $_POST['itemImg'];

    $sql = "UPDATE items SET name = '$name', cost = '$cost', description = '$desc', image = '$img' WHERE id = '$id'";

    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "Error updating record: " . mysqli_error($conn);
    }

    mysqli_close($conn);

    changeJSON();
}

function newItems() {
    $conn = connect();
    $name = $_POST['itemName'];
    $cost = $_POST['itemCost'];
    $desc = $_POST['itemDesc'];
    $img = $_POST['itemImg'];

    $sql = "INSERT INTO items (name, cost, description, image)
VALUES ('$name', '$cost', '$desc', '$img')";

    if (mysqli_query($conn, $sql)) {
        echo "1";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);

    changeJSON();
}

function deleteItems() {
    $conn = connect();
    $id = $_POST['id'];
    $name = $_POST['itemName'];
    $cost = $_POST['itemCost'];
    $desc = $_POST['itemDesc'];
    $img = $_POST['itemImg'];

    $sql = "DELETE FROM items WHERE id= '$id'";

    if (mysqli_query($conn, $sql)) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . mysqli_error($conn);
    }

    mysqli_close($conn);
    changeJSON();
}

function changeJSON() {
    $conn = connect();
    $sql = "SELECT * FROM items";
    $result = mysqli_query($conn, $sql);

    if (mysqli_num_rows($result) > 0) {
        $out = array();
        while($row = mysqli_fetch_assoc($result)) {
            $out[$row["id"]] = $row;
        }
        $a = file_put_contents('../item.json', json_encode($out));
        echo $a;
    } else {
        echo "0";
    }
    mysqli_close($conn);
}


