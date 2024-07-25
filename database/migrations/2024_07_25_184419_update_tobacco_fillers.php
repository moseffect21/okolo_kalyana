<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateTobaccoFillers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tobacco_fillers', function (Blueprint $table) {
            $table->integer('tobacco_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tobacco_fillers', function (Blueprint $table) {
            $table->dropColumn('tobacco_id');
        });
    }
}
