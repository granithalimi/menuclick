<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Orders extends Model
{
    //
    protected $fillable = [
        'table_id',
        'status',
    ];

    public function products(){
        return $this->belongsToMany(Products::class);
    }

    public function orders_products(){
        return $this->hasMany(OrdersProducts::class);
    }

    public function table(){
        return $this->hasOne(Tables::class, "id", "table_id");
    }
}
