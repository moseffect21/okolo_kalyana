<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\articles;

class CategorMain extends Model
{
    use HasFactory;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'updated_at',
        'created_at',
    ];

    public function subcategories()
    {
        return $this->hasMany(CategorMain::class, 'parent', 'id')->where('visible', 1);
    }

    public function articles()
    {
        return $this->hasMany(articles::class, 'id_categories', 'id')
            ->where('visible', 1)
            ->orderBy('created_at', 'desc');
    }
}
