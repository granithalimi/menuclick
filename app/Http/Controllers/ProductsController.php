<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Products;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render("products", [
            "products" => Products::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render("create-products", [
            'categories' => Categories::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'name' => 'required',
            'category' => 'required',
            'pic' => 'required',
            'desc' => 'required',
        ]);
        /* fix the picture thing */
        Products::create([
            "category_id" => $request->category,
            "name" => $request->name,
            "pic" => $request->name,
            "description" => $request->desc
        ]);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $product)
    {
        //
        return Inertia::render("show-product", [
            "product" => Products::where("id", $product->id)->first(),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Products $product)
    {
        //
        return Inertia::render("edit-products", [
            'product' => Products::where("id", $product->id)->first(),
            'categories' => Categories::all(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Products $product)
    {
        //
        $p = Products::where("id", $product->id)->first();
        $p->update([
            "category_id" => $request->category,
            "name" => $request->name,
            "pic" => $request->name,
            "description" => $request->desc
        ]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Products $product)
    {
        //
        $p = Products::where("id", $product->id)->first();
        $p->delete();
        return to_route("product.index");
    }
}
