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
        Schema::create('applies_for', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer("volunteering_event_id");
            $table->integer("volunteer_id");
            $table->integer("is_done");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('applies_for');
    }
};
