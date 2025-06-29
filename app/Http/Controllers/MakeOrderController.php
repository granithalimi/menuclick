<?php

namespace App\Http\Controllers;

use App\Models\OrderedProduct;
use App\Models\Orders;
use Illuminate\Http\Request;

class MakeOrderController extends Controller
{
    //
    public function store(Request $request){
        $products = ($request->order);

        $new_order = Orders::create(["table_id" => $request->id, "status" => "pending"]);
        foreach($products as $order){
            OrderedProduct::create(["orders_id" => $new_order->id, "products_id" => $order['id'], "qty" => $order['qty']]);
        }
        return redirect()->back();
    }
}
