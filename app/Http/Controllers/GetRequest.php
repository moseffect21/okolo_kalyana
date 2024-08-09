<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\articles;
use App\Models\partners;
use App\Models\team;
use App\Models\Likes;
use App\Models\comments as CommentDB;
use Illuminate\Support\Facades\Auth;


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
