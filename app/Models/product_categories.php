<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\products;

class product_categories extends Model
{


    public function products()
    {
        return $this->hasMany('App\Models\products', 'categ_id', 'id');
    }
}
