<?php

namespace App\Http\Controllers\SmokingRoom;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use App\Models\TobaccoFiller;
use DB;

//модели
use App\Models\User;
use App\Models\Bowls;
use App\Models\Coals;
use App\Models\HookahBlock;
use App\Models\Tobacco;
use App\Models\TobaccoFillersRate;

class SmokingRoom extends Controller
{
    /*
        Запрос на получение забивок

        Принимаемые параметры в запросе:
        bowl - slug чаши
        hookah - slug кальяна
        hookah_block - slug колауда
        tobacco - slug тобака
        smoker - id куряги
        objective_rating - объективный рейтинг
        subjective_rating - субъективный рейтинг
        users_rating - рейтинг пользователей
        aroma_rating - рейтинг аромки
        coal_placement - slug расстановки углей
        coal - slug углей
        with_video - флаг "прокуры только с видео"
        page - номер страницы
        per_page - кол-во на каждой странице
    */
    public function getTobaccoFillers(Request $request)
    {
        $fillers = TobaccoFiller::with(['brand', 'bowl', 'hookah_block', 'coal_placement', 'coal', 'hookah', 'smoker', 'tobacco']);

        // Составляем фильтры
        $filters = [];
        if ($request->has('bowl')) {
            $fillers->whereRelation('bowl', 'slug', '=', $request->query('bowl'));
        }
        if ($request->has('hookah')) {
            $fillers->whereRelation('hookah', 'slug', '=', $request->query('hookah'));
        }
        if ($request->has('hookah_block')) {
            $fillers->whereRelation('hookah_block', 'slug', '=', $request->query('hookah_block'));
        }
        if ($request->has('tobacco')) {
            $fillers->whereRelation('tobacco', 'slug', '=', $request->query('tobacco'));
        }
        if ($request->has('smoker')) {
            array_push($filters, ['smoker_id', '=', $request->query('smoker')]);
        }
        if ($request->has('objective_rating')) {
            array_push($filters, ['objective_rating', '=', $request->query('objective_rating')]);
        }
        if ($request->has('subjective_rating')) {
            array_push($filters, ['subjective_rating', '=', $request->query('subjective_rating')]);
        }
        if ($request->has('users_rating')) {
            array_push($filters, ['users_rating', '=', $request->query('users_rating')]);
        }
        if ($request->has('aroma_rating')) {
            array_push($filters, ['aroma_rating', '=', $request->query('aroma_rating')]);
        }
        if ($request->has('coal_placement')) {
            $fillers->whereRelation('coal_placement', 'slug', '=', $request->query('coal_placement'));
        }
        if ($request->has('coal')) {
            $fillers->whereRelation('coal', 'slug', '=', $request->query('coal'));
        }
        if ($request->has('with_video')) {
            array_push($filters, ['video_url', '<>', '']);
        }
        
        // Фильтруем по необходимости
        if (count($filters) !== 0) {
            $fillers = $fillers->where($filters);
        }

        // Сортируем по дате создания
        $fillers = $fillers->orderBy('created_at', 'desc');

        // Пагинация при необходимости
        if ($request->has('page')) {
            $perPage = intval($request->query('per_page'));
            $fillers = $fillers->paginate($perPage ? $perPage : 14);
            return response()->json($fillers, 200);
        }

        // Получаем данные
        $fillers = $fillers->get();
        return response()->json($fillers, 200);
    }

    /*
        Получаем забивку по slug
    */
    public function getTobaccoFillerBySlug(Request $request, $slug) {
        $filler = TobaccoFiller::with(['brand', 'bowl', 'hookah_block', 'coal_placement', 'coal', 'hookah', 'smoker', 'tobacco'])->where('slug', $slug)->first();
        if (empty($filler)) {
            $filler = TobaccoFiller::with(['brand', 'bowl', 'hookah_block', 'coal_placement', 'coal', 'hookah', 'smoker', 'tobacco'])->where('id', $slug)->first();
        }
        if ($filler) {
            return response()->json($filler, 200);
        }
        return response()->json(['message' => 'Забивка не найдена'], 404);
    }

    /*
        Запрос на получение данных забивочного цеха
    */
    public function getSmokingRoomData(Request $request) {
        $rating = [0, 1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];

        // Получаем данные
        $bowls = Bowls::withCount('fillers')->orderBy('name', 'asc')->get()->makeHidden(['description', 'created_at', 'updated_at', 'content', 'video_url']);
        
        // Топовые чаши
        $top_bowls = $bowls->sortByDesc(function ($item) {
            return $item->fillers_count + $item->manual_rating;
        })->values()->take(10);
        
        // Прокурщики
        $smokers = User::where('role_id', 1)->get()->makeHidden(['vk_id', 'fb_id', 'google_id', 'birthdate', 'created_at', 'updated_at', 'email_verified_at', 'avatar', 'email']);

        // Коллауды
        $hookahBlocks = HookahBlock::orderBy('name', 'asc')->get()->makeHidden(['description', 'created_at', 'updated_at', 'content', 'video_url']);

        // Топовые коллауды
        $top_hookahBlocks = $hookahBlocks->sortByDesc(function ($item) {
            return $item->fillers_count + $item->manual_rating;
        })->values()->take(10);

        // Табаки
        $tobaccos = Tobacco::orderBy('name', 'asc')->get()->makeHidden(['description', 'created_at', 'updated_at', 'content', 'video_url']);

        // Топовые табаки
        $top_tobaccos = $tobaccos->sortByDesc(function ($item) {
            return $item->fillers_count + $item->manual_rating;
        })->values()->take(20);

        // Рейтинг
        $subjective_rating = $rating;
        $objective_rating = $rating;

        // Формируем ответ
        $response = [
            'bowls' => $bowls,
            'top_bowls' => $top_bowls,
            'bowls_count' => $bowls->count(),
            'smokers' => $smokers,
            'hookah_blocks' => $hookahBlocks,
            'top_hookah_blocks' =>  $top_hookahBlocks,
            'hookah_blocks_count' => $hookahBlocks->count(),
            'tobaccos' => $tobaccos,
            'top_tobaccos' => $top_tobaccos,
            'tobaccos_count' => $tobaccos->count(),
            'subjective_rating' => $subjective_rating,
            'objective_rating' => $objective_rating,
        ];
        return response()->json($response, 200);
    }

    /*
        Запрос на оценку забивки пользователей

        Принимает параметры:
        tobacco_filler - id забивки
        rate - рейтинг по 10 бальной шкале
        user - id пользователя
    */
    public function rateTobaccoFiller(Request $request) {
        $rateVal = round($request->post('rate'));
        if (!$rateVal || $rateVal <=0 || $rateVal > 10) {
            return response()->json(['message' => 'Оценка должна быть больше 0 и меньше или равно 10'], 404);
        }

        // Создаем и заполняем модель оценки забивки
        $rate = new TobaccoFillersRate;
        $rate->tobacco_filler_id = intval($request->post('tobacco_filler'));
        $rate->rate = $rateVal;
        if ($request->has('user')) {
            $rate->user_id = intval($request->post('user'));
        }
        $rate->save();

        // Обновляем пользовательский рейтинг забивки
        $filler = TobaccoFiller::where('id', $request->post('tobacco_filler'))->withAvg('user_rating', 'rate')->first();
        $filler->users_rating = intval($filler->user_rating_avg_rate);
        $filler->save();

        // Возвращаем созданную модель
        return response()->json($rate, 200);
    }
}
