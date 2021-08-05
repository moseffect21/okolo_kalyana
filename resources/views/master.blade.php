<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">

    <!-- Google / Search Engine Tags -->
    <meta itemprop="name" content="Околокальяна">
    <meta itemprop="description" content="Это комьюнити ценителей кальяна, которое станет твоим проводником в околокальянный мир, в целую культуру, которая намного шире и богаче, чем просто «попускать дымок».">
    <meta itemprop="image" content="/images/favicon.png">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://okolokalyana.ru">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Околокальяна">
    <meta property="og:description" content="Это комьюнити ценителей кальяна, которое станет твоим проводником в околокальянный мир, в целую культуру, которая намного шире и богаче, чем просто «попускать дымок».">
    <meta property="og:image" content="/images/favicon.png">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Околокальяна">
    <meta name="twitter:description" content="Это комьюнити ценителей кальяна, которое станет твоим проводником в околокальянный мир, в целую культуру, которая намного шире и богаче, чем просто «попускать дымок».">
    <meta name="twitter:image" content="/images/favicon.png">

    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png">
    <link rel="icon" sizes="any" type="image/svg+xml" href="/images/favicon.png">
    <link href="/css/swiper.min.css" rel="stylesheet">
    <link href="{{mix('css/app.css')}}" rel="stylesheet">
    @auth
        <script>
            var auth_user = {!! auth()->user()->toJson() !!};
        </script>
    @else
        <script>
            var auth_user = null;
        </script>
    @endauth

</head>

<body>

    <!-- React root DOM -->
    <div id="root">
    </div>

    <!-- React JS -->
    <script src="{{ mix('js/app.js') }}" defer></script>
    

</body>
</html>