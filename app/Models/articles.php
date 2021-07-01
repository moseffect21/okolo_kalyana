<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class articles extends Model
{
    use HasFactory;

    public function comments()
    {
        return $this->hasMany('App\Models\comments', 'article_id', 'id');
    }
    public function authors()
    {
        return $this->hasMany('App\Models\User', 'id', 'authors_id');
    }
}
