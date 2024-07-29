<?php

namespace App\Http\Controllers\Taplink;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

//модели
use App\Models\TaplinkCategory;

class TaplinkController extends Controller
{
    /*
        Запрос на получение категорий ссылок
    */
    public function getTaplinkCategoriesWithLinks(Request $request)
    {
        $categories = TaplinkCategory::with(['links'])->get()->sortBy('order');
        return response()->json($categories, 200);
    }
}
