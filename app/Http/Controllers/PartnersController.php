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
    public function getPartnerBySlug(Request $request, $slug)
    {
        $partner = partners::where('slug', $slug)->with('videos', 'articles', 'fillers')->first();
        if (empty($partner)) {
            $partner = partners::where('id', $slug)->with('videos', 'articles', 'fillers')->first();
        }
        if (!empty($partner)) {
            return response()->json($partner, 200);
        }
        return response()->json(['message' => 'Партнер не найден'], 404);
    }
}
