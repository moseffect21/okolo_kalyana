<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class HookahBlock extends Model
{
    use HasFactory;

    public function brand(): HasOne
    {
        return $this->hasOne('App\Models\Brand', 'id', 'brand_id');
    }
    public function fillers()
    {
        return $this->hasMany('App\Models\TobaccoFiller', 'hookah_block_id', 'id');
    }
}
