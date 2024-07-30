<?php

use App\Http\Controllers\ContentsController;
use App\Http\Controllers\EpisodeController;
use App\Http\Controllers\SeasonController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Models\Content;

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

Route::prefix('users')->group(function () {
    Route::post('/', [UserController::class, 'store']);
    Route::get('/', [UserController::class, 'index']);
    Route::get('/{id}', [UserController::class, 'show']);
    Route::patch('/{id}', [UserController::class, 'update']);
    Route::delete('/{id}', [UserController::class, 'destroy']);
});

Route::prefix('contents')->group(function() {
    Route::post('/', [ContentsController::class, 'store']);
    Route::get('/', [ContentsController::class, 'index']);
    Route::get('/{id}', [ContentsController::class, 'show']);
    Route::patch('/{id}', [ContentsController::class, 'update']);
    Route::delete('/{id}', [ContentsController::class, 'destroy']);
});

Route::prefix('seasons')->group(function() {
    Route::post('/', [SeasonController::class, 'store']);
    Route::get('/', [SeasonController::class, 'index']);
    Route::get('/{id}', [SeasonController::class, 'show']);
    Route::patch('/{id}', [SeasonController::class, 'update']);
    Route::delete('/{id}', [SeasonController::class, 'destroy']);
});

Route::prefix('episodes')->group(function() {
    Route::post('/', [EpisodeController::class, 'store']);
    Route::get('/', [EpisodeController::class, 'index']);
    Route::get('/{id}', [EpisodeController::class, 'show']);
    Route::patch('/{id}', [EpisodeController::class, 'update']);
    Route::delete('/{id}', [EpisodeController::class, 'destroy']);
});