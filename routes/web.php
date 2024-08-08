<?php

use App\Http\Controllers\Login;
use App\Http\Controllers\Taplink\TaplinkController;
use App\Models\Mixes;
use App\Models\Brand;
use App\Models\Coals;
use App\Models\CoalsPlacement;
use App\Models\Hookah;
use App\Models\HookahBlock;
use App\Http\Controllers\GetRequest;
use App\Http\Controllers\SmokingRoom\SmokingRoom;
use App\Http\Controllers\WebApi\ReactController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

// Route::get('/logout', function () {
//     Auth::logout();
//     return redirect('/');
// });

Route::group(['prefix' => '/api/v1'], function () {

    // Группа запросов по авторизации
    Route::get('/login-vk', function () {
        return Socialite::driver('vkontakte')->redirect();
    });
    Route::get('/login-fb', function () {
        return Socialite::driver('facebook')->redirect();
    });
    Route::get('/login-google', function () {
        return Socialite::driver('google')->redirect();
    });
    Route::get('/auth-vk', [Login::class, 'authVK']);
    Route::get('/auth-fb', [Login::class, 'authFB']);
    Route::get('/auth-google', [Login::class, 'authGOOGLE']);

    // Поиск по контенту 
    Route::get('/search', [GetRequest::class, 'search']);

    // Партнеры
    Route::group(['prefix' => '/partners'], function () {
        Route::get('/', [GetRequest::class, 'getPartners']); // Список партнеров
        Route::get('/{id}', [GetRequest::class, 'getPartner']); // Получаем партнера
    });

    Route::get('/user/{id}', [GetRequest::class, 'getUser']);
    Route::get('/main', [GetRequest::class, 'getMain']);
    Route::get('/team', [GetRequest::class, 'getTeam']);

    // Шоурум
    Route::group(['prefix' => '/shop'], function () {
        Route::get('/categories', [GetRequest::class, 'getShopCategories']); // Получить список категорий
        Route::get('/categories/{id}', [GetRequest::class, 'getCategoriesProducts']); // Получить категорию и продукты в ней
        Route::get('/product/{id}', [GetRequest::class, 'getProducts']); // Получить продукт
        Route::get('/product/{id}/comment', [GetRequest::class, 'pushCommentProduct']); // Отправить коммент в продукт
    });

    // Миксы
    Route::group(['prefix' => '/mixes'], function () {
        Route::get('/all', [Mixes::class, 'getAll']);
        Route::get('/get_mixes', [Mixes::class, 'getMixes']);
        Route::get('/get', [Mixes::class, 'getMix']);
        Route::get('/get_variants', [Mixes::class, 'getVariants']);
    });
    
    // Категории контента - Видео, Статьи, Таплинк
    Route::get('/categories', [GetRequest::class, 'getCategories']);
    Route::get('/category/{slug}', [GetRequest::class, 'getCategory']); // Список чего-то в категории контента 

    // Статьи 
    Route::group(['prefix' => '/article'], function () {
        Route::get('/{id}', [GetRequest::class, 'getArticle']);
        Route::post('/{id}/comment', [GetRequest::class, 'pushComment']);
        Route::get('/{id}/like', [GetRequest::class, 'pushLike']);
    });
    
    // Чаши и расстановка чаш
    Route::get('/coals', [Coals::class, 'getAll']);
    Route::get('/coals_placement', [CoalsPlacement::class, 'getAll']);

    // Бренды
    Route::get('/brands', [Brand::class, 'getAll']);

    // Кальяны и коллауды
    Route::get('/hookahs', [Hookah::class, 'getAll']);
    Route::get('/hookah_blocks', [HookahBlock::class, 'getAll']);

    // Забивочный цех
    Route::group(['prefix' => '/tobacco_fillers'], function () {
        Route::post('/rate', [SmokingRoom::class, 'rateTobaccoFiller']);
        Route::get('/', [SmokingRoom::class, 'getTobaccoFillers']);
        Route::get('/get_filters', [SmokingRoom::class, 'getSmokingRoomData']);
        Route::get('/{id}', [SmokingRoom::class, 'getTobaccoFillerById']);
    });

    // Таплинк
    Route::get('/taplinks', [TaplinkController::class, 'getTaplinkCategoriesWithLinks']);

    Route::get('/{nickname}', [GetRequest::class, 'getNickname']);
});





Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);
