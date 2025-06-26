<?php

namespace App\Http\Controllers;

use App\Models\Categories;
use App\Models\Products;
use Illuminate\Http\Request;

class UpdatePicsController extends Controller
{
    //
    public function updateCategories(Request $request)
    {
        $c = Categories::where("id", $request->id)->first();
        $pic = $c->pic;
        if ($request->hasFile("pic")) {
            $path = $request->file("pic")->store("images", "public");
            $pic = str_replace('images/', '', $path);
        }
        $c->update(["name" => $request->name, "pic" => $pic]);
        return to_route("category.index");
    }

    public function updateProducts(Request $request)
    {
        $p = Products::where("id", $request->id)->first();
        $pic = $p->pic;
        if ($request->hasFile("pic")) {
            $path = $request->file("pic")->store("images", "public");
            $pic = str_replace('images/', '', $path);
        }
        $p->update([
            "name" => $request->name,
            "pic" => $pic,
            "price" => $request->price,
            "category_id" => $request->category,
            "description" => $request->desc
        ]);
        return to_route("product.index");
    }
}
