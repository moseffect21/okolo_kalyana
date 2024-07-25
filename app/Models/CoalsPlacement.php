<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CoalsPlacement extends Model
{
    use HasFactory;

    public function getAll() {
        $coalsPlacement = CoalsPlacement::with('brand')->get();
        return response()->json($coalsPlacement, 200);
    }

    public function brand()
    {
        return $this->hasOne('App\Models\Brand', 'id', 'brand_id');
    }

}
