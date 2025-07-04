<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders_products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("orders_id");
            $table->unsignedBigInteger("products_id");
            $table->unsignedInteger("qty");
            $table->timestamps();

            $table->foreign('orders_id')->references('id')->on('orders')->onDelete("cascade");
            $table->foreign('products_id')->references('id')->on('products')->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
