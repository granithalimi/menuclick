<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderedProduct extends Model
{
    //
    public $table = "ordered_products";

    protected $fillable = [
        "orders_id",
        "products_id",
        "qty",
    ];
}
