<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSlugColumnToTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tobaccos', function (Blueprint $table) {
            $table->string('slug')->unique();
        });
        Schema::table('bowls', function (Blueprint $table) {
            $table->string('slug')->unique();
        });
        Schema::table('mixes', function (Blueprint $table) {
            $table->string('slug')->unique();
        });
        Schema::table('coals', function (Blueprint $table) {
            $table->string('slug')->unique();
        });
        Schema::table('hookahs', function (Blueprint $table) {
            $table->string('slug')->unique();
        });
        Schema::table('hookah_blocks', function (Blueprint $table) {
            $table->string('slug')->unique();
        });
        Schema::table('coals_placements', function (Blueprint $table) {
            $table->string('slug')->unique();
        });
        Schema::table('tobacco_fillers', function (Blueprint $table) {
            $table->string('slug')->unique();
        });
        Schema::table('brands', function (Blueprint $table) {
            $table->string('slug')->unique();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tobaccos', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
        Schema::table('bowls', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
        Schema::table('mixes', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
        Schema::table('coals', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
        Schema::table('hookah_blocks', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
        Schema::table('coals_placements', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
        Schema::table('tobacco_fillers', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
        Schema::table('brands', function (Blueprint $table) {
            $table->dropColumn('slug');
        });
    }
}
