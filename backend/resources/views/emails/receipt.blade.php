<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div>
        <h1>{{ $details['title'] }}</h1>
        <p>Dear, {{$details['firstname']}} {{$details['lastname']}} your account {{$details['accountno']}}, has been credited with  {{$details['amtdeposited']}} and your account balance is now {{$details['total']}}</p>

        <h5>Below is the transaction:</h5>

        <p>Acct name : {{$details['deponame']}} {{$details['deposurname']}}</p>
        <p>Bank Name : {{$details['bankname']}}</p>
        <p>Amount Deposited : ${{$details['amtdeposited']}}</p>
    </div>
</body>
</html>