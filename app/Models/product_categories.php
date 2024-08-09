<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\products;

class product_categories extends Model
{


    public function products()
    {
        return $this->hasMany(products::class, 'categ_id', 'id')->with('images');
    }
}
