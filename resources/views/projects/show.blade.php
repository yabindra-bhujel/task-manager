@extends('navigation.layout')

@section('title', 'Create Project')

@section('content')
<div class="container">
    <h1>{{ $project->name }}</h1>
    <p><strong>Description:</strong> {{ $project->description }}</p>
    <p><strong>Status:</strong> {{ $project->status }}</p>
    <p><strong>Start Date:</strong> {{ $project->start_date }}</p>
    <p><strong>End Date:</strong> {{ $project->end_date }}</p>

</div>
@endsection