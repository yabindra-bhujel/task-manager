<!-- 
@extends('navigation.layout') 

@section('title', 'Home')

@section('content')
<h1 class="text-3xl font-semibold">Welcome to the Home Page</h1>
<p>Here you can manage your tasks and teams.</p>
@endsection -->

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React in Laravel</title>
    <link href="{{ mix('css/app.css') }}" rel="stylesheet"> <!-- Laravel Mix CSS -->
</head>

<body>

    <!-- This is where React will render the component -->
    <div id="react-root"></div>

    <script src="{{ mix('js/app.js') }}"></script> <!-- Laravel Mix JS -->
</body>

</html>