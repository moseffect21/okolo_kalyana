<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tobacco extends Model
{
    use HasFactory;

    public function brand()
    {
        return $this->hasOne('App\Models\Brand', 'id', 'brand_id');
    }
    public function fillers()
    {
        return $this->hasMany('App\Models\TobaccoFiller', 'tobacco_id', 'id');
    }
}
