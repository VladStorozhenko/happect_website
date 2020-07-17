
<?php 

// FILE FOR HANDLING CONTACT FORM 

    require_once('connection.php');


    $client_name = addslashes($_POST['contact-name']);
    $contact_way = addslashes($_POST['contact-way']);
    $client_contact;
    if($_POST['client-contact-mail']) {
        $client_contact = addslashes($_POST['client-contact-mail']);
    } else if ($_POST['client-contact-viber']) {
        $client_contact = addslashes($_POST['client-contact-viber']);
    } else {
        $client_contact = addslashes($_POST['client-contact-telegram']);
    }
    $message = addslashes($_POST['contact-message']);
    $page = $_POST['current-page'];


    $sql = "INSERT INTO questions (name, answer_way, contact, message) VALUES ('$client_name', '$contact_way', '$client_contact', '$message')";

    if (mysqli_query($con, $sql)) {
        echo "New record created successfully";
      } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($con);
      }
      if(strpos($page, 'contact_form_submitted')) {
            header("Location: $page");
       } else if(strpos($page, 'main_form_submitted')) {
            header("Location: $page" . "?contact_form_submitted=1");
       } else {
            header("Location: $page" . "?contact_form_submitted=1");
       }
       echo '<br>' . $page;
       var_dump($page);
       if(strpos($page, 'main_form_submitted')) {
           echo "GOOD";
       }
?>
