<?php 

$db_host = 'localhost';
    $db_user = 'root';
    $db_password = '';
    $db_name = 'happect_test';

    $con = new mysqli($db_host, $db_user, $db_password, $db_name);

    $con -> set_charset("utf8");

    if ($con->connect_error) {
        die('Error occured');
    } else {
        echo "Connection";
    }

?>