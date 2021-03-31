<?php
use App\Http\Controllers\Login;
use App\Http\Controllers\GetRequest;
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

    Route::get('/{nickname}',[Links::class, 'getNickname']);
    Route::get('/categories',[Links::class, 'getCategories']);
    Route::get('/category/{id}',[Links::class, 'getCategory']);
    Route::get('/article/{id}',[Links::class, 'gelArticle']);
    Route::post('/article/{id}/comment ',[Links::class, 'pushComment']);

    // Route::get('/login-vk', function () {
    //     return Socialite::driver('vkontakte')->redirect();
    // });
    // Route::get('/login-fb', function () {
    //     return Socialite::driver('facebook')->redirect();
    // });
    // Route::get('/login-google', function () {
    //     return Socialite::driver('google')->redirect();
    // });
    // Route::get('/auth-vk',[Login::class, 'authVK']);
    // Route::get('/auth-fb',[Login::class, 'authFB']);
    // Route::get('/auth-google',[Login::class, 'authGOOGLE']);

    // Route::group(['prefix' => '/user'], function () {
    //     Route::get('/{nickname}',[Profile::class, 'getUser']);
    //     Route::post('/edit',[Profile::class, 'EditNick']);
    // });

    // Route::get('/click',[Links::class, 'click']);

    // Route::group(['prefix' => '/buttons'], function () {
    //     Route::post('/order',[buttons::class, 'changeposition']);
    //     Route::post('/{id}',[buttons::class, 'changebutton']);
    //     Route::post('/',[buttons::class, 'addbutton']);
    //     Route::delete('/{id}',[buttons::class, 'deletebutton']);
    //     Route::get('/{id}',[buttons::class, 'getButton']);
    //     Route::get('/',[buttons::class, 'getButtonsArray']);
    // });

    // Route::group(['prefix' => '/links'], function () {
    //     Route::post('/search',[Links::class, 'searchKey']);
    //     Route::get('/',[Links::class, 'getLinks']);
    //     Route::post('/{id}',[Links::class, 'editLink']);
    //     Route::post('/',[Links::class, 'addLink']);
    //     Route::delete('/{id}',[Links::class, 'deleteLink']);
    //     Route::get('/{key}',[Links::class, 'getLink']);
    // });
});





Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

