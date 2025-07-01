<?php

namespace App\Http\Controllers;

use App\Events\OrderEvent;
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

        //fix this!!!!
        $event_order = Orders::with(["orders_products" => function($q) {return $q->with("products");}, "table"])->find($new_order->id);
        broadcast(new OrderEvent($event_order));

        return redirect()->back();
    }
}
