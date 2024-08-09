<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Coals extends Model
{
    use HasFactory;

    public function brand()
    {
        return $this->hasOne('App\Models\Brand', 'id', 'brand_id');
    }
}
