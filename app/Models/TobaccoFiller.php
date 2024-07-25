<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\TobaccoFillersRate;

class TobaccoFiller extends Model
{
    use HasFactory;

    public function brand()
    {
        return $this->hasOne('App\Models\Brand', 'id', 'brand_id');
    }

    public function bowl()
    {
        return $this->hasOne('App\Models\Bowls', 'id', 'bowl_id');
    }

    public function hookah_block()
    {
        return $this->hasOne('App\Models\HookahBlock', 'id', 'hookah_block_id');
    }
    public function coal_placement()
    {
        return $this->hasOne('App\Models\CoalsPlacement', 'id', 'coal_placement_id');
    }
    public function coal()
    {
        return $this->hasOne('App\Models\Coals', 'id', 'coal_id');
    }
    public function hookah()
    {
        return $this->hasOne('App\Models\Hookah', 'id', 'hookah_id');
    }
    public function smoker()
    {
        return $this->hasOne('App\Models\User', 'id', 'smoker_id');
    }
    public function tobacco()
    {
        return $this->hasOne('App\Models\Tobacco', 'id', 'tobacco_id');
    }
    public function user_rating()
    {
        return $this->hasMany('App\Models\TobaccoFillersRate', 'tobacco_filler_id', 'id');
    }
}
