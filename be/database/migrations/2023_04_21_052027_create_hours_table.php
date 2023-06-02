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
        Schema::create('hours', function (Blueprint $table) {
            $table->id();
            $table->integer('actioner_id')->nullable();
            $table->string('actioner_type')->nullable();
            $table->integer('site_id')->nullable();
            $table->integer('type');
            $table->integer('asset_id');
            $table->date('date_start');
            $table->date('date_end');
            $table->integer('day')->nullable();
            $table->time('time_start');
            $table->time('time_end');
            $table->integer('all_day');
            $table->integer('open');
            $table->string('name');
            $table->integer('custom_id');
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
        Schema::dropIfExists('hours');
    }
};
