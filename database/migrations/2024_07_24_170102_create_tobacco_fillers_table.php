<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTobaccoFillersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tobacco_fillers', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('brand_id')->nullable();
            $table->string('tobacco_line')->nullable();
            $table->string('aroma')->nullable();
            $table->integer('bowl_id')->nullable();
            $table->string('gram')->nullable();
            $table->integer('hookah_block_id')->nullable();
            $table->integer('coal_id')->nullable();
            $table->integer('coal_placement_id')->nullable();
            $table->integer('hookah_id')->nullable();
            $table->integer('aroma_rating')->nullable();
            $table->integer('subjective_rating')->nullable();
            $table->integer('objective_rating')->nullable();
            $table->integer('users_rating')->nullable();
            $table->string('warming_time')->nullable();
            $table->longText('description')->nullable();
            $table->longText('content')->nullable();
            $table->string('name')->nullable();
            $table->string('photo')->nullable();
            $table->string('video_url')->nullable();
            $table->integer('smoker_id')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tobacco_fillers');
    }
}
