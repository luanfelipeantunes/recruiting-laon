<?php

use App\Http\Controllers\ActorController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AwardController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContentsController;
use App\Http\Controllers\EpisodeController;
use App\Http\Controllers\SeasonController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

//Usuários
Route::prefix('users')->group(function () {
    Route::post('/', [UserController::class, 'store']);
    Route::get('/', [UserController::class, 'index']);
    Route::get('/{id}', [UserController::class, 'show']);
    Route::patch('/{id}', [UserController::class, 'update'])->middleware('auth:sanctum');
});

//Conteúdos
Route::prefix('contents')->group(function() {
    Route::get('/', [ContentsController::class, 'index']);
    Route::get('/{id}', [ContentsController::class, 'show']);
});


//Temporadas
Route::prefix('seasons')->group(function() {
    Route::get('/', [SeasonController::class, 'index']);
    Route::get('/{id}', [SeasonController::class, 'show']);
});


//Episódios
Route::prefix('episodes')->group(function() {
    Route::get('/', [EpisodeController::class, 'index']);
    Route::get('/{id}', [EpisodeController::class, 'show']);
});

//Categorias
Route::prefix('categories')->group(function() {
    Route::get('/', [CategoryController::class, 'index']);
    Route::post('/', [CategoryController::class, 'store']);
});

//Atores
Route::prefix('actors')->group(function() {
    Route::get('/', [ActorController::class, 'index']);
    Route::post('/', [ActorController::class, 'store']);
});

//Prêmios
Route::prefix('awards')->group(function() {
    Route::get('/', [AwardController::class, 'index']);
    Route::post('/', [AwardController::class, 'store']);
});

//Autenticação
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


//Rotas protegidas
Route::middleware(['auth:sanctum', 'is_admin'])->group(function(){
    Route::prefix('contents')->group(function() {
        Route::post('/', [ContentsController::class, 'store']);
        Route::patch('/{id}', [ContentsController::class, 'update']);
        Route::delete('/{id}', [ContentsController::class, 'destroy']);
    });

    Route::prefix('seasons')->group(function() {
        Route::post('/', [SeasonController::class, 'store']);
        Route::patch('/{id}', [SeasonController::class, 'update']);
        Route::delete('/{id}', [SeasonController::class, 'destroy']);
    });

    Route::prefix('episodes')->group(function() {
        Route::post('/', [EpisodeController::class, 'store']);
        Route::patch('/{id}', [EpisodeController::class, 'update']);
        Route::delete('/{id}', [EpisodeController::class, 'destroy']);
    });

});
