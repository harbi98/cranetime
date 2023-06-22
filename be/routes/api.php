<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AssetController;
use App\Http\Controllers\Api\HoursController;
use App\Http\Controllers\Api\HoursCustomDatesController;
use App\Http\Controllers\AuthController;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
     
Route::middleware('auth:api')->group( function () {
    // assets
    Route::get('assets/{type}', [AssetController::class, 'index']);
    Route::post('assets', [AssetController::class, 'store']);
    Route::get('asset/{id}', [AssetController::class, 'show']);
    Route::get('asset/search/{type}/{custom_name}', [AssetController::class, 'search']);
    Route::put('asset/{id}/edit-name', [AssetController::class, 'updateName']);
    Route::put('asset/{id}/edit-type', [AssetController::class, 'updateType']);
    Route::put('asset/{id}/edit-make-model', [AssetController::class, 'updateMakeModel']);
    Route::put('asset/{id}/edit-max_length-unit', [AssetController::class, 'updateMaxLengthUnit']);
    Route::delete('assets/{id}/delete', [AssetController::class, 'destroy']);

    // assets availability
    Route::post('hours-custom-date', [HoursCustomDatesController::class, 'store']);
    Route::get('custom-availability/{id}', [HoursCustomDatesController::class, 'show']);
    Route::get('hours/{id}', [HoursController::class, 'show']);
    Route::post('hours', [HoursController::class, 'store']);
    Route::post('breaktime', [HoursController::class, 'addBreaktime']);
    Route::get('breaktime/{id}', [HoursController::class, 'showBreaktime']);
    Route::get('breaktime-hour/{name}', [HoursController::class, 'getBreaktimeHours']);
    Route::post('logout', [AuthController::class, 'logout']);
});
