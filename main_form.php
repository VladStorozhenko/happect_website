<?php 

    // FILE FOR HANDLING MAIN FORM 

    require_once('connection.php');


    $project_type = $_POST['purpose'];
    $client_name = addslashes($_POST['name']);
    $contact_way = $_POST['main-contact-way'];
    $client_contact;
    if($_POST['main-client-email']) {
        $client_contact = addslashes($_POST['main-client-email']);
    } else if ($_POST['main-client-viber']) {
        $client_contact = addslashes($_POST['main-client-viber']);
    } else {
        $client_contact = addslashes($_POST['main-client-telegram']);
    }

    $message = addslashes($_POST['project-info']);

    $page = $_POST['main-current-page'];


    $sql = "INSERT INTO requests (type, name, answer_way, contact, message) VALUES ('$project_type', '$client_name', '$contact_way', '$client_contact', '$message')";

    if (mysqli_query($con, $sql)) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($con);
    }
    if(strpos($page, 'main_form_submitted')) {
            header("Location: $page");
    } else {
            header("Location: $page" . "?main_form_submitted=1");
    }
    echo '<br>' . $page;

?>