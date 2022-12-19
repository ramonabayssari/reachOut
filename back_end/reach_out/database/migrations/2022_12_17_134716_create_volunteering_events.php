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
        Schema::create('volunteering_events', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("company_id");
            $table->string("event_description");
            $table->string("date");
            $table->string("time");
            $table->string("category");
            $table->string("location");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('volunteering_events');
    }
};
