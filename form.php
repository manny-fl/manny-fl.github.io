<?php

$email = $_POST['email'];

if (filter_var($email, FILTER_VALIDATE_EMAIL) === false) {

        exit('invalid format');
}
echo 'email valid';