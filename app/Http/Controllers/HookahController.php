<?php

namespace App\Http\Controllers;

use App\Models\Coals;
use App\Models\CoalsPlacement;
use App\Models\Hookah;
use App\Models\HookahBlock;
use Illuminate\Http\Request;


class HookahController extends Controller
{
    // Запрос на получение кальянов
    public function getHookahs() {
        $hookah = Hookah::with("brand")->get();
        return response()->json($hookah, 200);
    }

    // Запрос на получение коллаудов
    public function getHookahBlocks() {
        $hookahBlock = HookahBlock::with('brand')->get();
        return response()->json($hookahBlock, 200);
    }

    // Запрос на списка чаш
    public function getCoals() {
        $coals = Coals::with("brand")->get();
        return response()->json($coals, 200);
    }

    // Запрос на список расстановок чаш
    public function getCoalsPlacements() {
        $coalsPlacement = CoalsPlacement::with('brand')->get();
        return response()->json($coalsPlacement, 200);
    }
}
