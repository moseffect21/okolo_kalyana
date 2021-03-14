<?php

namespace App\Http\Controllers\WebApi;

use App\Http\Controllers\Controller;

class ReactController extends Controller
{
    public function show () {
        return view('master');
    }
}
