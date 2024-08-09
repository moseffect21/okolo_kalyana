<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Nesk\Rialto\Data\JsFunction;

class ReactController extends Controller
{

    public function show(Request $request)
    {

        function _bot_detected()
        {

            return (isset($_SERVER['HTTP_USER_AGENT'])
                && preg_match('/bot|crawl|slurp|spider|mediapartners/i', $_SERVER['HTTP_USER_AGENT']));
        }

        return view('master');
    }
}
