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
        Schema::table('products', function (Blueprint $table) {
            $table->string('ozon_link')->nullable();
            $table->string('wb_link')->nullable();
            $table->string('ozon_price')->nullable();
            $table->string('wb_price')->nullable();
            $table->string('tg_link')->nullable();
            $table->string('youtube_link')->nullable();
            $table->string('twitch_link')->nullable();
            $table->string('same_link')->nullable();
            $table->string('insta_link')->nullable();
            $table->string('vk_link')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropColumn('ozon_link');
            $table->dropColumn('wb_link');
            $table->dropColumn('ozon_price');
            $table->dropColumn('wb_price');
            $table->dropColumn('tg_link');
            $table->dropColumn('youtube_link');
            $table->dropColumn('twitch_link');
            $table->dropColumn('same_link');
            $table->dropColumn('insta_link');
            $table->dropColumn('vk_link');
        });
    }
};
