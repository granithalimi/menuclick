<?php

use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrdersController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\TablesController;
use App\Http\Controllers\UpdatePicsController;
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
    Route::resource('category', CategoriesController::class)->except(["update"]);
    Route::resource('product', ProductsController::class)->except(['update']);
    Route::resource('order', OrdersController::class)->only(["index"]);
    Route::resource('table', TablesController::class)->except(['show', 'store']);
    Route::post("category/update", [UpdatePicsController::class, 'updateCategories'])->name("category.update");;
    Route::post("product/update", [UpdatePicsController::class, 'updateProducts'])->name("product.update");;
});

Route::get("table/{table}", [HomeController::class, 'index']);
/* Route::get("table/{table}/categories/{category}", [HomeController::class, 'show'])->name("table.category"); */

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
