<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\partners;


class PartnersController extends Controller
{
    //  запрос на получение партнеров
    public function getPartners(Request $request)
    {
        return response()->json(partners::get(), 200);
    }

    //  запрос на получение партнера
    public function getPartnerById(Request $request, $id)
    {
        $partner = partners::where('id', $id)->with('videos', 'articles')->first();

        return response()->json($partner, 200);
    }
}
