<?php

namespace App\Http\Controllers;

use App\Models\Orders;
use App\Models\OrdersProducts;
use Illuminate\Http\Request;

class MakeOrderController extends Controller
{
    //
    public function store(Request $request){
        $products = ($request->order);

        $new_order = Orders::create(["table_id" => $request->id, "status" => "pending"]);
        foreach($products as $order){
            OrdersProducts::create(["orders_id" => $new_order->id, "products_id" => $order['id'], "qty" => $order['qty']]);
        }
        return redirect()->back();
    }
}
