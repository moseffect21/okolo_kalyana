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
        $parentCateg = categories::where('parent',"0")->get();

        foreach($parentCateg as $item) {
            $item['child_categories'] = categories::where('parent',$item['id'])->get();
        }
        return response()->json($parentCateg, 200); 
    }

    public function getCategory(Request $request,$slug)
    {
        $category = categories::where('slug',$slug)->first();
        $category['articles'] = articles::where('id_categories',$category['id'])->get();
        return response()->json($category, 200); 
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
