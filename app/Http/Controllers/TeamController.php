<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\team;


class TeamController extends Controller
{
    //  запрос на получение команды
    public function getTeam(Request $request)
    {
        $team = team::get();
        return response()->json($team, 200);
    }
}
