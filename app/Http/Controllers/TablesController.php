<?php

namespace App\Http\Controllers;

use App\Models\Tables;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TablesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('tables', [
            'tables' => Tables::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $last_t = Tables::orderBy("id", "desc")->first();
        if ($last_t) {
            Tables::create(["table_num" => $last_t->table_num + 1]);
        } else {
            Tables::create(["table_num" => 1]);
        }
        return redirect()->back();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Tables $tables)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Tables $table)
    {
        //
        return Inertia::render("table", [
            "table" => Tables::where("id", $table->id)->first(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Tables $table)
    {
        //
        $table = Tables::where("id", $table->id)->first();
        if (Tables::where("table_num", $request->table_num)->first()) {
            return redirect()->back();
        }
        $table->update(["table_num" => $request->table_num]);
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Tables $table)
    {
        Tables::where("id", $table->id)->first()->delete();
        return redirect()->route("table.index");
    }
}
