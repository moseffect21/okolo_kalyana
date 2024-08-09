<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;


class BrandsController extends Controller
{
    //  запрос на получение списка брендов
    public function getBrands(Request $request)
    {
        $brands = Brand::get()->all();
        return response()->json($brands, 200);
    }
}
