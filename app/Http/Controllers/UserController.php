<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;


class UserController extends Controller
{
    //Получение пользователя по никнейму
    public function getUserByNickname(Request $request, $nickname)
    {
        $user = User::where('nickname', $nickname)->first();
        if ($user) {
            return response()->json($user, 200);
        } else {
            return response()->json(["success" => false, "message" => "Пользователь не найден"], 420);
        }
    }
}
