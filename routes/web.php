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
    
    Route::get('/login-vk', function () {
        return Socialite::driver('vkontakte')->redirect();
    });
    Route::get('/login-fb', function () {
        return Socialite::driver('facebook')->redirect();
    });
    Route::get('/login-google', function () {
        return Socialite::driver('google')->redirect();
    });
    Route::get('/auth-vk',[Login::class, 'authVK']);
    Route::get('/auth-fb',[Login::class, 'authFB']);
    Route::get('/auth-google',[Login::class, 'authGOOGLE']);

    Route::get('/partners',[GetRequest::class, 'getPartners']);
    Route::get('/team',[GetRequest::class, 'getTeam']);
    Route::get('/categories',[GetRequest::class, 'getCategories']);
    Route::get('/shop/categories',[GetRequest::class, 'getShopCategories']);
    Route::get('/shop/categories/{id}',[GetRequest::class, 'getCategoriesProducts']);
    Route::get('/shop/product/{id}/comment',[GetRequest::class, 'getCommentProducts']);
    Route::get('/shop/product/{id}',[GetRequest::class, 'getProducts']);
    Route::get('/category/{slug}',[GetRequest::class, 'getCategory']);
    Route::get('/article/{id}',[GetRequest::class, 'gelArticle']);
    Route::post('/article/{id}/comment ',[GetRequest::class, 'pushComment']);
  

    Route::get('/{nickname}',[GetRequest::class, 'getNickname']);

  

  
});





Route::get('/{path?}', [
    'uses' => 'ReactController@show',
    'as' => 'react',
    'where' => ['path' => '.*']
]);

