<?php

namespace App\Http\Controllers\WebApi;

use Nesk\Puphpeteer\Puppeteer;
use Nesk\Rialto\Data\JsFunction;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;


class ReactController extends Controller
{


    public function show(Request $request)
    {

        function _bot_detected()
        {

            return (isset($_SERVER['HTTP_USER_AGENT'])
                && preg_match('/bot|crawl|slurp|spider|mediapartners/i', $_SERVER['HTTP_USER_AGENT']));
        }

        if (_bot_detected()) {

            $puppeteer = new Puppeteer;
            $browser = $puppeteer->launch(['args' => [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-accelerated-2d-canvas',
                '--no-first-run',
                '--no-zygote',
                '--single-process', // <- this one doesn't works in Windows
                '--disable-gpu'
            ], 'headless' => true]);

            $page = $browser->newPage();
            // $page->goto(strval($request->url()) . '?no_category=true&bot=true');
            // 

            $data = $page->evaluate(JsFunction::createWithBody('return document.documentElement.outerHTML'));
            $data = str_replace(mix('js/app.js'), '', $data);
            $yandex = mb_strcut($data, stripos($data, '<!-- Yandex.Metrika counter -->'), stripos($data, '<!-- /Yandex.Metrika counter -->') - stripos($data, '<!-- Yandex.Metrika counter -->'));
            $data = str_replace($yandex, '', $data);
            $browser->close();


            return response($data, 200);
        } else {


            return view('master');
        }
    }
}
