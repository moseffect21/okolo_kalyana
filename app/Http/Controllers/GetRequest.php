<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\categories;
use App\Models\articles;
use App\Models\partners;
use App\Models\team;
use App\Models\product_categories;
use App\Models\products;

use App\Models\comments as CommentDB;
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

    //Получение всех категорий магазина
    public function getShopCategories(Request $request)
    {   
        
        return response()->json(product_categories::get(), 200); 
    }

    public function getCategoriesProducts(Request $request,$id){
        return response()->json(product_categories::where('id',$id)->with('products')->get(), 200); 

    }
    public function getProducts(){
        return response()->json(products::where('id',$id)->with('comments')->get(), 200); 
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
        $article = articles::where('id',$id)->first();
        $article['comments'] = CommentDB::where('article_id',$article['id'])->get();
        return response()->json($article, 200); 
        
    }

    //  запрос на получение команды
    public function getTeam(Request $request)
    {
        $team = team::where('id',1)->first();
        return response()->json($team, 200); 
        
    }

     //  запрос на получение партнеров
    public function getPartners(Request $request){
        return response()->json(partners::get(),200)
    }

    public function pushComment(Request $request,$id)
    {
        if ($request['text']) {
            if(Auth::check()){
                $comments = New CommentDB;
                $comments->user_id=Auth::id();
                $comments->nickname=$request['nickname'];
                $comments->text=$request['text'];
                $comments->article_id=$id;
                $comments->save();
                
                return response()->json("success",200);
                
            }else{
                $comments = New CommentDB;
                $comments->user_id=0;
                $comments->nickname=$request['nickname'];
                $comments->text=$request['text'];
                $comments->article_id=$id;
                $comments->save();
                return response("success",200);
            } 
        }
        return response(0,420);
        
    }


    
}
