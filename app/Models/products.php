<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\comments;
use App\Models\ProductImage;

class products extends Model
{
    use HasFactory;

    public function comments()
    {
        return $this->hasMany(comments::class, 'prod_id', 'id');
    }

    public function images()
    {
        return $this->hasMany(ProductImage::class, 'product_id', 'id');
    }
}
