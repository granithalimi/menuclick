<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrdersProducts extends Model
{
    //
    public $table = "orders_products";

    protected $fillable = [
        "orders_id",
        "products_id",
        "qty",
    ];

    public function products(){
        return $this->hasMany(Products::class, "id", "products_id");
    }
}
