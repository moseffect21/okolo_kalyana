<?php

namespace App\Models;

use Composer\DependencyResolver\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class partners extends Model
{
    use HasFactory;

    public function videos()
    {
        return $this->hasMany('App\Models\articles', 'partner_id', 'id')->where('type', 'video');
    }
    public function articles()
    {
        return $this->hasMany('App\Models\articles', 'partner_id', 'id')->where('type', 'article');
    }
}
