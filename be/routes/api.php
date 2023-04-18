<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AssetController;
use App\Http\Controllers\AuthController;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
     
Route::middleware('auth:api')->group( function () {
    Route::get('assets/{type}', [AssetController::class, 'index']);
    Route::post('assets', [AssetController::class, 'store']);
    Route::get('asset/{id}', [AssetController::class, 'show']);
    Route::put('asset/{id}/edit-name', [AssetController::class, 'updateName']);
    Route::put('asset/{id}/edit-type', [AssetController::class, 'updateType']);
    Route::put('asset/{id}/edit-make-model', [AssetController::class, 'updateMakeModel']);
    Route::delete('assets/{id}/delete', [AssetController::class, 'destroy']);
    Route::post('logout', [AuthController::class, 'logout']);
});
