<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\categories;
use App\Models\articles;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\comments;


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
        $categoria =categories::where('id',$id)->first();
        $articl = articles::where('id_categories',$id)->get();
        return response()->json(['категория'=>$categoria,'статьи'=>$articl], 200); 
    }
    //  запрос на получение статьи/видео
    public function gelArticle(Request $request,$id)
    {
        return response()->json(articles::where('id',$id)->first(), 200); 
        
    }

    public function pushComment(Request $request,$id)
    {
        if(Auth::check()){
            $comments = New comments;
            $comments->user_id=Auth::id();
            $comments->nickname=$request['nickname'];
            $comments->text=$request['text'];
            $comments->save();
            
            return response()->json("success",200);
            
        }else{
            return response( 0,420);
        } 
    }


    
}
