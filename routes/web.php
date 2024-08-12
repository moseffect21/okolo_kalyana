<?php

use App\Http\Controllers\Login;
use App\Http\Controllers\Taplink\TaplinkController;
use App\Http\Controllers\SmokingRoom\SmokingRoom;
use App\Http\Controllers\ArticlesController;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\ProductsController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\HookahController;
use App\Http\Controllers\MixesController;
use App\Http\Controllers\PartnersController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
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
    Route::get('/search', [ArticlesController::class, 'search']);

    // Партнеры
    Route::group(['prefix' => '/partners'], function () {
        Route::get('/', [PartnersController::class, 'getPartners']); // Список партнеров
        Route::get('/{id}', [PartnersController::class, 'getPartnerById']); // Получаем партнера
    });

    // Данные для главной страницы
    Route::get('/main', [ArticlesController::class, 'getMain']);

    // Команда
    Route::get('/team', [TeamController::class, 'getTeam']);

    // Шоурум
    Route::group(['prefix' => '/shop'], function () {
        Route::get('/categories', [ProductsController::class, 'getShopCategories']); // Получить список категорий
        Route::get('/categories/{id}', [ProductsController::class, 'getProductsCategory']); // Получить категорию и продукты в ней
        Route::get('/products', [ProductsController::class, 'getProducts']); // Получить список продуктов с пагинацией
        Route::get('/products/{id}', [ProductsController::class, 'getProduct']); // Получить продукт
        Route::post('/products/{id}/comment', [ProductsController::class, 'addCommentToProduct']); // Отправить коммент в продукт
    });

    // Миксы
    Route::group(['prefix' => '/mixes'], function () {
        Route::get('/all', [MixesController::class, 'getAll']);
        Route::get('/get_mixes', [MixesController::class, 'getMixes']);
        Route::get('/get', [MixesController::class, 'getMix']);
        Route::get('/get_variants', [MixesController::class, 'getVariants']);
    });
    
    // Категории контента - Видео, Статьи, Таплинк
    Route::get('/categories', [ArticlesController::class, 'getCategories']);
    Route::get('/category/{slug}', [ArticlesController::class, 'getCategory']); // Список чего-то в категории контента 

    // Статьи 
    Route::group(['prefix' => '/article'], function () {
        Route::get('/{id}', [ArticlesController::class, 'getArticle']);
        Route::post('/{id}/comment', [ArticlesController::class, 'addCommentToArticle']);
        Route::post('/{id}/like', [ArticlesController::class, 'addOrRemoveLike']);
    });
    
    // Чаши и расстановка чаш
    Route::get('/coals', [HookahController::class, 'getCoals']);
    Route::get('/coals_placement', [HookahController::class, 'getCoalsPlacements']);

    // Бренды
    Route::get('/brands', [BrandsController::class, 'getBrands']);

    // Кальяны и коллауды
    Route::get('/hookahs', [HookahController::class, 'getHookahs']);
    Route::get('/hookah_blocks', [HookahController::class, 'getHookahBlocks']);

    // Забивочный цех
    Route::group(['prefix' => '/tobacco_fillers'], function () {
        Route::post('/rate', [SmokingRoom::class, 'rateTobaccoFiller']);
        Route::get('/', [SmokingRoom::class, 'getTobaccoFillers']);
        Route::get('/get_filters', [SmokingRoom::class, 'getSmokingRoomData']);
        Route::get('/{id}', [SmokingRoom::class, 'getTobaccoFillerById']);
    });

    // Таплинк
    Route::get('/taplinks', [TaplinkController::class, 'getTaplinkCategoriesWithLinks']);

    Route::get('/{nickname}', [UserController::class, 'getUserByNickname']);
});





Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);
