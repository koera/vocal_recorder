<?php
include 'dao/AudioDB.php';

$uploads_dir = 'uploads/';

$audio = isset($_FILES['audio_data']) ? $_FILES['audio_data'] : null;
$parent_first_name = isset($_POST['parent_first_name']) ? $_POST['parent_first_name'] : null;
$parent_last_name = isset($_POST['parent_last_name']) ? $_POST['parent_last_name'] : null;
$parent_nationality = isset($_POST['parent_nationality']) ? $_POST['parent_nationality'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$telephone = isset($_POST['telephone']) ? $_POST['telephone'] : null;
$dulwich_pudong = isset($_POST['dulwich_pudong']) ? $_POST['dulwich_pudong'] : null;
$number_childreen = isset($_POST['number_childreen']) ? $_POST['number_childreen'] : null;


if($audio){
    $size = $_FILES['audio_data']['size']; //the size in bytes
    $input = $_FILES['audio_data']['tmp_name']; //temporary name that PHP gave to the uploaded file
    $output = $_FILES['audio_data']['name'].".wav"; //letting the client control the filename is a rather bad idea
    move_uploaded_file($input, $uploads_dir.$output);
}
else
    $output = null;

$audio = new AudioDB();
$audio->addAudio($parent_first_name, $parent_last_name, $parent_nationality, $email, $telephone, $dulwich_pudong, $number_childreen, $output);
echo "Your data is saved"
?>