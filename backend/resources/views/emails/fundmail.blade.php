<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
      <div class="container">
            <div class="row">
                 <div class="col-md-6">
                        <div class="card shadow">
                             <div class="card-body">
                                 <h1 class="card-header">{{ $details['title'] }}</h1>
                                 <h5>Dear {{$details['firstname']}} {{$details['lastname']}}</h5>
                                 <p>Your account {{$details['accountno']}} has been credited with {{$details['amtdeposited']}} <br>
                                   your total bal is {{$details['total']}}
                                </p>
                             </div>
                        </div>
                 </div>
            </div>
      </div>
</body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
</html>