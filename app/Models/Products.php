<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    //
    protected $fillable = [
        'name',
        'pic',
        'price',
        'description',
        'category_id',
    ];
}
