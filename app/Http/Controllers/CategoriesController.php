<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render("categories", [
            'categories' => Categories::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render("create-categories");
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
        ]);
        /* fix the picture thing */
        Categories::create(["name" => $request->name, "pic" => $request->name]);
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Categories $categories)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categories $category)
    {
        //
        return Inertia::render("edit-categories", [
            'category' => Categories::where("id", $category->id)->first(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categories $category)
    {
        //
        $c = Categories::where("id", $category->id)->first();
        $c->update(["name" => $request->name, "pic" => $request->pic]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categories $category)
    {
        //
        $c = Categories::where("id", $category->id)->first();
        $c->delete();
        return to_route("category.index");
    }
}
