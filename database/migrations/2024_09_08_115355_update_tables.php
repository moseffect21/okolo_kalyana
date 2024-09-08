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
        Schema::table('tobacco_fillers', function (Blueprint $table) {
            if (!Schema::hasColumn('tobacco_fillers', 'alternative_video_url')) {
                $table->string('alternative_video_url')->nullable();
            }
        });
        Schema::table('partners', function (Blueprint $table) {
            if (!Schema::hasColumn('partners', 'slug')) {
                $table->string('slug')->unique()->nullable();
            } else {
                $table->string('slug')->unique()->nullable()->change();
            }
            if (!Schema::hasColumn('partners', 'brand_id')) {
                $table->integer('brand_id')->nullable();
            }
        });
        Schema::table('bowls', function (Blueprint $table) {
            $table->integer('brand_id')->nullable();
            $table->integer('manual_rating')->nullable();
        });
        Schema::table('tobaccos', function (Blueprint $table) {
            $table->integer('brand_id')->nullable();
            $table->integer('manual_rating')->nullable();
        });
        Schema::table('hookah_blocks', function (Blueprint $table) {
            $table->integer('manual_rating')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tobacco_fillers', function (Blueprint $table) {
            $table->dropColumn('alternative_video_url');
        });
        Schema::table('partners', function (Blueprint $table) {
            $table->dropColumn('slug');
            $table->dropColumn('brand_id');
        });
        Schema::table('bowls', function (Blueprint $table) {
            $table->dropColumn('brand_id');
            $table->dropColumn('manual_rating');
        });
        Schema::table('tobaccos', function (Blueprint $table) {
            $table->dropColumn('brand_id');
            $table->dropColumn('manual_rating');
        });
        Schema::table('hookah_blocks', function (Blueprint $table) {
            $table->dropColumn('manual_rating');
        });
    }
};
