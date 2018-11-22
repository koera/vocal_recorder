<?php
include 'dao/AudioDB.php';

$uploads_dir = 'uploads/';

$audio = isset($_FILES['audio_data']) ? $_FILES['audio_data'] : null;


if($audio){
    $size = $_FILES['audio_data']['size']; //the size in bytes
    $input = $_FILES['audio_data']['tmp_name']; //temporary name that PHP gave to the uploaded file
    $output = $_FILES['audio_data']['name'].".wav"; //letting the client control the filename is a rather bad idea
    move_uploaded_file($input, $uploads_dir.$output);
}
else
    $output = null;

$audio = new AudioDB();
$audio->addAudio($output);
echo "Your data is saved"
?>