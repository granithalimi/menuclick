<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Products;
use App\Models\Tables;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    //
    public function index(Tables $table){
        $c = Categories::all();
        $p = Products::all();
        return Inertia::render("home", [
            'categories' => $c,
            'all_products' => $p,
            'table_id' => $table->id,
        ]);
    }

    public function show(Tables $table, Categories $category){
        $p = Products::where("category_id", $category->id)->get();
        return Inertia::render("show", [
            'products' => $p,
            'table_id' => $table->id,
        ]);
    }
}
