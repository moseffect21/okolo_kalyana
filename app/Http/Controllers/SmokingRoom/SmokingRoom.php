<?php

namespace App\Http\Controllers\SmokingRoom;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use App\Models\TobaccoFiller;

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
        bowl - id чаши
        hookah_block - id колауда
        tobacco - id тобака
        smoker - id куряги
        objective_rating - объективный рейтинг
        subjective_rating - субъективный рейтинг
        users_rating - рейтинг пользователей
        aroma_rating - рейтинг аромки
        coal_placement - id расстановки углей
        coal - id углей
        page - номер страницы
        per_page - кол-во на каждой странице
    */
    public function getTobaccoFillers(Request $request)
    {
        $fillers = TobaccoFiller::with(['brand', 'bowl', 'hookah_block', 'coal_placement', 'coal', 'hookah', 'smoker', 'tobacco']);

        // Составляем фильтры
        $filters = [];
        if ($request->has('bowl')) {
            array_push($filters, ['bowl_id', '=', $request->query('bowl')]);
        }
        if ($request->has('hookah_block')) {
            array_push($filters, ['hookah_block_id', '=', $request->query('hookah_block')]);
        }
        if ($request->has('tobacco')) {
            array_push($filters, ['tobacco_id', '=', $request->query('tobacco')]);
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
            array_push($filters, ['coal_placement_id', '=', $request->query('coal_placement')]);
        }
        if ($request->has('coal')) {
            array_push($filters, ['coal_id', '=', $request->query('coal')]);
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
            $fillers = $fillers->paginate($perPage ? $perPage : 15);
            return response()->json($fillers, 200);
        }

        // Получаем данные
        $fillers = $fillers->get();
        return response()->json($fillers, 200);
    }

    /*
        Получаем забивку по id
    */
    public function getTobaccoFillerById(Request $request, $id) {
        $filler = TobaccoFiller::with(['brand', 'bowl', 'hookah_block', 'coal_placement', 'coal', 'hookah', 'smoker', 'tobacco'])->where('id', $id)->first();
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
        $bowls = Bowls::get()->makeHidden(['description', 'created_at', 'updated_at', 'content', 'video_url']);
        $smokers = User::where('role_id', 1)->get()->makeHidden(['vk_id', 'fb_id', 'google_id', 'birthdate', 'created_at', 'updated_at', 'email_verified_at', 'avatar', 'email']);
        $hookahBlocks = HookahBlock::get()->makeHidden(['description', 'created_at', 'updated_at', 'content', 'video_url']);
        $tobaccos = Tobacco::get()->makeHidden(['description', 'created_at', 'updated_at', 'content', 'video_url']);
        $subjective_rating = $rating;
        $objective_rating = $rating;

        // Формируем ответ
        $response = [
            'bowls' => $bowls,
            'bowls_count' => $bowls->count(),
            'smokers' => $smokers,
            'hookah_blocks' => $hookahBlocks,
            'hookah_blocks_count' => $hookahBlocks->count(),
            'tobaccos' => $tobaccos,
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
