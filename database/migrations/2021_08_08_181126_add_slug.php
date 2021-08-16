<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSlug extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('articles', function (Blueprint $table) {
            $table->string('slug')->unique()->nullable();
            $table->boolean('visible')->nullable();
        });
        Schema::table('categor_mains', function (Blueprint $table) {

            $table->boolean('visible')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {

        Schema::table('categor_mains', function (Blueprint $table) {
            //
        });
        Schema::table('articles', function (Blueprint $table) {
            //
        });
    }
}
