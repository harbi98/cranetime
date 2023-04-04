<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AssetController;

///////////////////////////////////////////////////

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('assets', [AssetController::class, 'index']);
Route::post('assets', [AssetController::class, 'store']);
Route::get('assets/{id}', [AssetController::class, 'show']);
Route::put('assets/{id}/edit', [AssetController::class, 'update']);
Route::delete('assets/{id}/delete', [AssetController::class, 'destroy']);
