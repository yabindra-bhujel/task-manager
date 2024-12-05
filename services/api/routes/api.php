<!-- api.php -->
<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\TeamController;
use Illuminate\Support\Facades\Route;


// auth routes
Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login')->name('login');
    Route::post('register', 'register')->name('register');
    Route::post('logout', 'logout')->name('logout');
    Route::post('refresh', 'refresh')->name('refresh');
    Route::get('me', 'me')->name('me');
});

// team routes
Route::apiResource('teams', TeamController::class);
Route::get('teams/{team}/members', 'TeamController@members')->name('teams.members');
Route::post('teams/{team}/members', 'TeamController@addMember')->name('teams.addMember');
Route::delete('teams/{team}/members/{user}', 'TeamController@removeMember')->name('teams.removeMember');
Route::get('teams/{team}/projects', 'TeamController@projects')->name('teams.projects');

