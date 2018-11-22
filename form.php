<?php

include 'dao/FormDB.php';

$parent_first_name = isset($_POST['parent_first_name']) ? $_POST['parent_first_name'] : null;
$parent_last_name = isset($_POST['parent_last_name']) ? $_POST['parent_last_name'] : null;
$parent_nationality = isset($_POST['parent_nationality']) ? $_POST['parent_nationality'] : null;
$email = isset($_POST['email']) ? $_POST['email'] : null;
$telephone = isset($_POST['telephone']) ? $_POST['telephone'] : null;
$dulwich_pudong = isset($_POST['dulwich_pudong']) ? $_POST['dulwich_pudong'] : null;
$number_childreen = isset($_POST['number_childreen']) ? $_POST['number_childreen'] : null;
$f = new FormDB();
$f->addForm($parent_first_name,$parent_last_name,$parent_nationality,$email,$telephone,$dulwich_pudong,$number_childreen);

header('Location: app.php?message=success');