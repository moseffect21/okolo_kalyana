<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTeamTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('team', function (Blueprint $table) {
            $table->string('name');
            $table->string('little_desc');
            $table->string('description');
            // $table->date('birthdate');
            $table->string('vk_url')->nullable();
            $table->string('inst_url')->nullable();
            $table->string('tg_url')->nullable();
            $table->string('youtube_url')->nullable(); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('team', function (Blueprint $table) {
            //
        });
    }
}
