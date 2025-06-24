<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\TablesController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

/* role:admin */
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::resource('category', CategoriesController::class);
    Route::resource('product', ProductsController::class);
    Route::resource('order', OrdersController::class);
    Route::resource('table', TablesController::class)->except(['show', 'store']);
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
