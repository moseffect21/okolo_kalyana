<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Http; // добавляе библиотеку для запросов
use DB;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;

class Login extends Controller
{
   
    public function authVK(Request $request){
    
        $code =$request['code'];
 
       
        $driver=["vkontakte","vk_id"];
       
        $userInfo = Socialite::driver($driver[0])->user();

        if(User::where($driver[1], $userInfo->getId())->count()!=1){
            
            $NewUser = new User();
            $NewUser->name= $userInfo->getName();
            $NewUser->avatar= $userInfo->getAvatar();
            $NewUser->nickname="id".User::count();
            $NewUser->password=Hash::make($userInfo->getId());
            $NewUser->vk_id=$userInfo->getId();
            $NewUser->save();
            
         
        }else{

            $NewUser=User::where($driver[1], $userInfo->getId())->get()->first();
        }
        // return $NewUser;
        Auth::login($NewUser);
        
        return redirect('/');
        // return var_dump(json_encode(  $user->getName()));
    }
    public function authGOOGLE(Request $request){
        $code =$request['code'];
        $driver=["google","google_id"];
      
        $userInfo = Socialite::driver($driver[0])->user();
        if(User::where($driver[1], $userInfo->getId())->count()!=1){
            
            $NewUser = new User();
            $NewUser->name= $userInfo->getName();
            $NewUser->avatar= $userInfo->getAvatar();
            $NewUser->nickname="id".User::count();
            $NewUser->password=Hash::make($userInfo->getId());
            $NewUser->google_id=$userInfo->getId();
            $NewUser->save();
         
        }else{

            $NewUser=User::where($driver[1], $userInfo->getId())->get()->first();
        }
        // return $NewUser;
        Auth::login($NewUser);
        
        return redirect('/');
        // return var_dump(json_encode(  $user->getName()));
    }

    public function authFB(Request $request){
        $code =$request['code'];
            $driver=["facebook","fb_id"];
      
        $userInfo = Socialite::driver($driver[0])->user();
        if(User::where($driver[1], $userInfo->getId())->count()!=1){
            
            $NewUser = new User();
            $NewUser->name= $userInfo->getName();
            $NewUser->avatar= $userInfo->getAvatar();
            $NewUser->nickname="id".User::count();
            $NewUser->password=Hash::make($userInfo->getId());
            $NewUser->fb_id=$userInfo->getId();
            $NewUser->save();
         
        }else{

            $NewUser=User::where($driver[1], $userInfo->getId())->get()->first();
        }
        // return $NewUser;
        Auth::login($NewUser);
        
        return redirect('/');
        // return var_dump(json_encode(  $user->getName()));
    }
    
}