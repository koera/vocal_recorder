<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

    <title>Demos</title>
</head>
<body class="container">
<p></p>
<div class="container">

    <!-- Nav tabs -->
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#forms">Forms</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#audios">Audio</a>
        </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content">
        <p></p>
        <div class="tab-pane active container" id="forms">
            <div class="row">
                <form id="form-simple">
                    <div class="form-group">
                        <label for="first_name">First name : </label>
                        <input type="text" name="firs_name" class="form-control" id="first_name" aria-describedby="emailHelp" placeholder="Enter first name">
                    </div>
                    <div class="form-group">
                        <label for="last_name">Last name : </label>
                        <input type="text" name="name" class="form-control" id="last_name" aria-describedby="emailHelp" placeholder="Enter name">
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail : </label>
                        <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                    </div>
                </form>
            </div>
        </div>
        <p></p>
        <div class="tab-pane container" id="audios">
            <div class="row">
                <img src="icon.png" alt="..." class="img-thumbnail" style="margin-left: 20px !important;">
            </div>
            <p></p>
            <div class="row">
                <button id="recordButton" class="btn btn-primary padding">
                    Record
                </button>
                <button id="pauseButton" class="btn btn-primary padding">
                    Pause
                </button>
                <button id="stopButton" class="btn btn-primary padding">
                    Stop
                </button>
            </div>
            <p></p>
            <div class="row">
                <div id="recordingsList" class="text-center"></div>
            </div>

            <p></p>
            <div class="row">
                <div id="success padding"></div>
            </div>
            <button type="button" id="submit" class="btn btn-primary">Submit</button>
        </div>

    </div>
</div>

<style>
    .padding{
        margin-left: 5px !important;
    }
</style>


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
<script src="https://cdn.rawgit.com/mattdiamond/Recorderjs/08e7abd9/dist/recorder.js"></script>
<script src="js/app.js"></script>
</body>
</html>