<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class products extends Model
{
    use HasFactory;

    public function comments()
    {
        return $this->hasMany('App\Models\comments', 'prod_id', 'id');
    }
}
