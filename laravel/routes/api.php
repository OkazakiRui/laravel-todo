<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\TaskController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post("login", [LoginController::class, "login"]);
Route::post("logout", [LoginController::class, "logout"]);

Route::group(["middleware" => "auth:sanctum"], function() {
    Route::patch('tasks/update-done/{id}', [TaskController::class, 'updateDone']);
    Route::resource('tasks', TaskController::class);
    Route::get('user', function (Request $request) {
        return $request->user();
    });

});

