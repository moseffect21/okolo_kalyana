<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\CategorMain;
use App\Models\articles;
use App\Models\partners;
use App\Models\team;
use App\Models\products;
use App\Models\TobaccoFiller;
use App\Models\comments;
use Illuminate\Support\Facades\Auth;
use App\Models\Likes;


class ArticlesController extends Controller
{
    // Получение данных для главной страницы
    public function getMain()
    {
        $articles = articles::with('category')->where(['show_main' => 1, 'type' => 'article'])->orderBy('created_at', 'desc')->take(4)->get()->makeHidden(['description', 'content']);
        $updates = articles::with('category')->where(['show_main' => 1])->orderBy('updated_at', 'desc')->take(5)->get()->makeHidden(['content']);
        $fillers = TobaccoFiller::with(['brand', 'bowl', 'hookah_block', 'coal_placement', 'coal', 'hookah', 'smoker', 'tobacco'])->orderBy('created_at', 'desc')->take(10)->get();
        $products = products::with('category')->orderBy('created_at', 'desc')->take(10)->get();
        $partners = partners::where('show_main', 1)->get();
        $team = team::get();

        return response()->json([
            'articles' => $articles,
            'updates' => $updates,
            'fillers' => $fillers,
            'products' => $products,
            'partners' => $partners,
            'team' => $team,
        ], 200);
    }

    // Поиск записей
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

    //Получение категорий с подкатегориями
    public function getCategories(Request $request)
    {
        $categories = CategorMain::where(['parent' => "0", "visible" => 1])
            ->with('subcategories')
            ->get();
        return response()->json($categories, 200);
    }

    /*
        Запрос на получение категории со статьями

        Принимаемые параметры в запросе:
        sort - поле, по которому выполняется сортировка
        sort_direction - направление сортировки (asc/desc)
        page - номер страницы
        per_page - кол-во на каждой странице

        $slug - слаг категории
    */
    public function getCategory(Request $request, $slug)
    {
        $perPage = $request->has('per_page') ? intval($request->query('per_page')) : 15;
        $category = CategorMain::firstWhere('slug', $slug);

        $orderBy = $request->has('sort') ? $request->query('sort') : null;
        $sortDirection = $request->has('sort_direction') && $request->query('sort_direction') === 'asc' ? 'asc' : 'desc';

        $articles = $category->articles($orderBy, $sortDirection)
            ->select(['id', 'title', 'id_categories', 'preview_img', 'preview_text', 'slug', 'type', 'created_at', 'updated_at']);

        $category->articles = $articles->paginate($perPage);
        
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

        $random = articles::where('visible', 1)->inRandomOrder()->limit(5)->get()->makeHidden(['content']);

        return response()->json(['article' => $article, 'random' => $random], 200);
    }

    /*
        Добавление комментария к статье

        Принимаемые параметры в запросе:
        text - текст комментария
        nickname - никнейм пользователя

        $id - id статьи
    */
    public function addCommentToArticle(Request $request, $id)
    {
        if ($request->has('text')) {
            $comments = new comments;
            $comments->nickname = $request->has('nickname') ? $request->post('nickname') : '';
            $comments->user_id = Auth::check() ? Auth::id() : 0;
            $comments->text = $request->post('text');
            $comments->article_id = $id;
            $comments->save();

            return response()->json("success", 200);
        }
        return response(0, 420);
    }

    /*
        Добавление или удаление лайка статьи

        Принимаемые параметры в запросе:
        text - текст комментария
        nickname - никнейм пользователя

        $id - id продукта
    */
    public function addOrRemoveLike(Request $request, $id)
    {
        if (Auth::check()) {
            $like = Likes::where(['user_id' => Auth::id(), 'article_id' => $id])->first();
            if (empty($like)) {
                $like = new Likes;
                $like->user_id = Auth::id();
                $like->article_id = $id;
                $like->save();
                articles::where('id', $id)->increment('count_like', 1);
                return response()->json($like, 200);
            }
            $like->delete();
            articles::where('id', $id)->increment('count_like', -1);
            return response()->json(["success" => true, "message" => "Лайк удален"], 200);
        }

        return response()->json(["success" => false, "message" => "Требуется авторизация"], 420);
    }
}
