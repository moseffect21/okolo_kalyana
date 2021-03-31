<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\categories;


class GetRequest extends Controller
{
    //Получение пользователя по никнейму
    public function getNickname(Request $request,$nickname)
    {
        $getNick = User::where('nickname', $nickname)->first();
        if($getNick){
            return response()->json($getNick, 200); 
        }else{
            return response()->json("nickname not found", 420); 
        }
    }

    //Получение всех категорий
    public function getCategories(Request $request)
    {   
        return response()->json(categories::where('parent',0)->get(), 200); 
    }

    public function getCategory(Request $request,$id)
    {
        
    }

    public function gelArticle(Request $request,$id)
    {
        
    }

    public function pushComment(Request $request,$id)
    {
        
    }


    
}
