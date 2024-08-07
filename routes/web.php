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

    Route::get('/user/{id}', [GetRequest::class, 'getUser']);
    Route::get('/main', [GetRequest::class, 'getMain']);
    Route::get('/partners', [GetRequest::class, 'getPartners']);
    Route::get('/partners/{id}', [GetRequest::class, 'getPartner']);
    Route::get('/team', [GetRequest::class, 'getTeam']);
    
    Route::get('/shop/categories', [GetRequest::class, 'getShopCategories']);
    Route::get('/shop/categories/{id}', [GetRequest::class, 'getCategoriesProducts']);
    Route::get('/shop/product/{id}/comment', [GetRequest::class, 'pushCommentProduct']);
    Route::get('/shop/product/{id}', [GetRequest::class, 'getProducts']);

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
    Route::get('/article/{id}', [GetRequest::class, 'getArticle']);
    Route::post('/article/{id}/comment ', [GetRequest::class, 'pushComment']);
    Route::get('/article/{id}/like  ', [GetRequest::class, 'pushLike']);

    
    // Чаши и расстановка чаш
    Route::get('/coals', [Coals::class, 'getAll']);
    Route::get('/coals_placement', [CoalsPlacement::class, 'getAll']);

    // Бренды
    Route::get('/brands', [Brand::class, 'getAll']);

    // Кальяны и коллауды
    Route::get('/hookahs', [Hookah::class, 'getAll']);
    Route::get('/hookah_blocks', [HookahBlock::class, 'getAll']);

    // Забивочный цех
    Route::get('/tobacco_fillers/{id}', [SmokingRoom::class, 'getTobaccoFillerById']);
    Route::post('/tobacco_fillers/rate', [SmokingRoom::class, 'rateTobaccoFiller']);
    Route::get('/tobacco_fillers', [SmokingRoom::class, 'getTobaccoFillers']);
    Route::get('/smoking_room', [SmokingRoom::class, 'getSmokingRoomData']);

    // Таплинк
    Route::get('/taplinks', [TaplinkController::class, 'getTaplinkCategoriesWithLinks']);

    Route::get('/{nickname}', [GetRequest::class, 'getNickname']);
});





Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);
