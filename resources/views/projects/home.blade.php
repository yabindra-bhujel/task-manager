@extends('navigation.layout')

@section('title', 'Create Project')

@section('content')
<div class="container mx-auto p-4">

    <h1 class="text-2xl font-bold mb-6">Create New Project</h1>

    <!-- Form for creating a project -->
    <form action="{{ route('projects.store') }}" method="POST">
        @csrf

        <!-- Project Name -->
        <div class="mb-4">
            <label for="name" class="block text-sm font-medium text-gray-700">Project Name</label>
            <input type="text" id="name" name="name" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter project name" required>
        </div>

        <!-- Description -->
        <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" name="description" rows="4" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter project description"></textarea>
        </div>

        <!-- Start Date -->
        <div class="mb-4">
            <label for="start_date" class="block text-sm font-medium text-gray-700">Start Date</label>
            <input type="date" id="start_date" name="start_date" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
        </div>

        <!-- End Date -->
        <div class="mb-4">
            <label for="end_date" class="block text-sm font-medium text-gray-700">End Date</label>
            <input type="date" id="end_date" name="end_date" class="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required>
        </div>

        <!-- Submit Button -->
        <div class="mt-6">
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Create Project</button>
        </div>

    </form>
</div>
@endsection