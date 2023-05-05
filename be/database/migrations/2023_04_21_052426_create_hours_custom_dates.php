<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hours_custom_dates', function (Blueprint $table) {
            $table->id();
            $table->integer('site_id');
            $table->integer('actioner_id');
            $table->string('name');
            $table->date('date_start');
            $table->date('date_end');
            $table->integer('asset_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hours_custom_dates');
    }
};