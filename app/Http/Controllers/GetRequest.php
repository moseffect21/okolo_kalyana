<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\CategorMain;
use App\Models\articles;
use App\Models\partners;
use App\Models\team;
use App\Models\product_categories;
use App\Models\products;
use App\Models\Likes;
use App\Models\comments as CommentDB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\comments;


class GetRequest extends Controller
{

    public function pushLike(Request $request, $id)
    {
        if (Auth::check()) {
            if (count(Likes::where(['user_id' => Auth::id(), 'article_id' => $id])->get()) === 0) {
                $like = new Likes;
                $like->user_id = Auth::id();
                $like->article_id = $id;
                $like->save();
                articles::where('id', $id)->increment('count_like', 1);
                return response()->json("add like", 200);
            } else {
                Likes::where(['user_id' => Auth::id(), 'article_id' => $id])->delete();
                articles::where('id', $id)->increment('count_like', -1);
                return response()->json("delete like", 200);
            }
        } else {
            return response()->json("not auth", 420);
        }
    }
    public function search(Request $request)
    {

        $data = articles::where(
            "title",
            'like',
            '%' . $request['text'] . '%'

        )->where('visible',1)->get();
        if (count($data) === 0) {
            return response("don't search", 200);
        } else {
            return response()->json($data, 200);
        }
    }
    //Получение пользователя по никнейму
    public function getNickname(Request $request, $nickname)
    {
        $getNick = User::where('nickname', $nickname)->first();
        if ($getNick) {
            return response()->json($getNick, 200);
        } else {
            return response()->json("nickname not found", 420);
        }
    }

    //Получение всех категорий
    public function getCategories(Request $request)
    {
        $parentCateg = CategorMain::query()
            ->where(['parent' => "0", "visible" => 1])
            ->get();

        foreach ($parentCateg as $item) {
            $item['child_categories'] = CategorMain::where('parent', $item['id'])->get();
        }
        return response()->json($parentCateg, 200);
    }

    //Получение всех категорий магазина
    public function getShopCategories(Request $request)
    {

        return response()->json(product_categories::get(), 200);
    }

    // Получение категории и их продуктов
    public function getCategoriesProducts(Request $request, $id)
    {
        return response()->json(product_categories::where('id', $id)->with('products')->get(), 200);
    }

    // Получение продуктов и комментариев
    public function getProducts($id)
    {
        return response()->json(products::where('id', $id)->with('comments')->get(), 200);
    }
    public function getCategory(Request $request, $slug)
    {
        $category = CategorMain::query()
            ->where('slug', $slug)
            ->first();
        
        $category['articles'] = articles::query()
            ->where(['id_categories' => $category['id'], 'visible' => 1])
            ->orderBy('created_at', 'desc')
            ->get();
        
        return response()->json($category, 200);
    }
    
    //  запрос на получение статьи/видео
    public function getArticle(Request $request, $id)
    {
        $article = articles::where('id', $id)->with('comments')->first();
        if (empty($article)) {
            $article = articles::where('slug', $id)->with('comments')->first();
        }
        foreach (explode(",", $article->authors_id) as $item) {

            $article->authors[] = User::where('id', $item)->first();
        }
        unset($article->authors[1]);
        foreach ($article->comments as $item) {


            $item['user'] = User::where('id', $item->user_id)->first();
        }
        $random = articles::where('visible', 1)->get()->random(3);

        return response()->json(['article' => $article, 'random' => $random], 200);
    }


    public function getUser($id)
    {
        if (count(User::where('id', $id)->get()) !== 0) {
            return response()->json(User::where('id', $id)->with('articles')->first(), 200);
        } else {
            return response()->json("user not found", 420);
        }
    }
    //  запрос на получение команды
    public function getTeam(Request $request)
    {
        $team = team::get();
        return response()->json($team, 200);
    }

    //  запрос на получение партнеров
    public function getPartners(Request $request)
    {
        return response()->json(partners::get(), 200);
    }

    //  запрос на получение партнера
    public function getPartner(Request $request, $id)
    {
        $partner = partners::where('id', $id)->with('videos', 'articles')->get()->first();

        return response()->json($partner, 200);
    }
    public function getMain()
    {
        return response()->json([
            'articles' => articles::where(['show_main' => 1, 'type' => 'article'])->orderBy('created_at', 'desc')->get(),
            'videos' => articles::where(['show_main' => 1, 'type' => 'video'])->orderBy('created_at', 'desc')->get(),
            'product_categories' => product_categories::where('show_main', 1)->get(),
            'partners' => partners::where('show_main', 1)->get(),
            'team' => team::get()
        ], 200);
    }
    // Добавление комманта продукут П.с. Стырил код Артем снизу 
    public function pushCommentProduct(Request $request, $id)
    {
        if ($request['text']) {
            if (Auth::check()) {
                $comments = new CommentDB;
                $comments->user_id = Auth::id();
                $comments->nickname = $request['nickname'];
                $comments->text = $request['text'];
                $comments->prod_id = $id;
                $comments->save();

                return response()->json("success", 200);
            } else {
                $comments = new CommentDB;
                $comments->user_id = 0;
                $comments->nickname = $request['nickname'];
                $comments->text = $request['text'];
                $comments->prod_id = $id;
                $comments->save();
                return response("success", 200);
            }
        }
        return response(0, 420);
    }
    public function pushComment(Request $request, $id)
    {
        if ($request['text']) {
            if (Auth::check()) {
                $comments = new CommentDB;
                $comments->user_id = Auth::id();
                $comments->nickname = $request['nickname'];
                $comments->text = $request['text'];
                $comments->article_id = $id;
                $comments->save();

                return response()->json("success", 200);
            } else {
                $comments = new CommentDB;
                $comments->user_id = 0;
                $comments->nickname = $request['nickname'];
                $comments->text = $request['text'];
                $comments->article_id = $id;
                $comments->save();
                return response("success", 200);
            }
        }
        return response(0, 420);
    }
}
