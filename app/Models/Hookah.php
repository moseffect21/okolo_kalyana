<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hookah extends Model
{
    use HasFactory;

    public function getAll() {
        $hookah = Hookah::with("brand")->get();
        return response()->json($hookah, 200);
    }
    public function brand()
    {
        return $this->hasOne('App\Models\Brand', 'id', 'brand_id');
    }
}
