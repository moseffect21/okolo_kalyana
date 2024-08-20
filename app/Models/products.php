<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\comments;

class products extends Model
{
    use HasFactory;

    public function comments()
    {
        return $this->hasMany(comments::class, 'prod_id', 'id');
    }

    public function category()
    {
        return $this->hasOne(product_categories::class, 'id', 'categ_id')->select(['id', 'name', 'slug']);
    }
}
