<?php
    //open connection to mysql db
   require_once('connect.php');

    //fetch table rows from mysql db
    $sql = "SELECT * FROM events WHERE date >= NOW()";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $emparray[] = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

    //close the db connection
    mysqli_close($connection);
?>


