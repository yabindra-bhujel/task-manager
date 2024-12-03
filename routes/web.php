<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\RegisterController;

// Register routes
Route::get('register', [RegisterController::class, 'showRegisterForm'])->name('register');
Route::post('register', [RegisterController::class, 'register']);


// Login routes
Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('login', [AuthController::class, 'login']);

// logout path
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');


// protected path
Route::middleware(['auth'])->get('/', function () {
    return view('home.home');
})->name('home');

Route::middleware(['auth'])->get('/projects', function () {
    return view('projects.home');
})->name('projects');

Route::middleware(['auth'])->get('/teams', function () {
    return view('team.home');
})->name('teams');

Route::middleware(['auth'])->get('/tasks', function () {
    return view('tasks.home');
})->name('tasks');

Route::middleware(['auth'])->get('/settings', function () {
    return view('settings.home');
})->name('settings');