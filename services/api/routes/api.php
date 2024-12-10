<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------

*/

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login')->name('login');
    Route::post('register', 'register')->name('register');
    Route::post('logout', 'logout')->name('logout');
    Route::post('refresh', 'refresh')->name('refresh');
    Route::get('me', 'me')->name('me');
});

Route::prefix('projects')->controller(ProjectController::class)->group(function () {
    Route::post('create', 'create')->name('create');
    Route::get('list', 'list')->name('list');
    Route::get('show/{id}', 'show')->name('show');
});

Route::prefix('tasks')->controller(TaskController::class)->group(function () {
    Route::post('create', 'create')->name('create');
    Route::get('list', 'list')->name('list');
});

