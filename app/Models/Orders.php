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
        return $this->hasMany(OrderedProduct::class, "orders_id");
    }
}
