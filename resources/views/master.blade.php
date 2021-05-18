<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover">
    {{-- <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="format-detection" content="telephone=no">

    <!-- Google / Search Engine Tags -->
    <meta itemprop="name" content="Wishmen — единый список желаний. Создай вишлист подарков и собирай донаты">
    <meta itemprop="description" content="Wishmen — сервис, который исполняет желания. Создай вишлист подарков, делись с друзьями, собирай донаты и исполняй мечты.">
    <meta itemprop="image" content="https://wish.men/images/icons/favicons/logo-wishmen-fav.svg">

    <!-- Facebook Meta Tags -->
    <meta property="og:url" content="https://wish.wish.men">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Wishmen — единый список желаний. Создай вишлист подарков и собирай донаты">
    <meta property="og:description" content="Wishmen — сервис, который исполняет желания. Создай вишлист подарков, делись с друзьями, собирай донаты и исполняй мечты.">
    <meta property="og:image" content="https://wish.men/images/icons/favicons/logo-wishmen-fav.svg">

    <!-- Twitter Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Wishmen — единый список желаний. Создай вишлист подарков и собирай донаты">
    <meta name="twitter:description" content="Wishmen — сервис, который исполняет желания. Создай вишлист подарков, делись с друзьями, собирай донаты и исполняй мечты.">
    <meta name="twitter:image" content="https://wish.men/images/icons/favicons/logo-wishmen-fav.svg"> --}}

    <link rel="apple-touch-icon" sizes="180x180" href="/image/favicons/fav.svg">
    <link rel="icon" type="image/png" sizes="32x32" href="/image/favicons/fav.svg">
    <link rel="icon" type="image/png" sizes="16x16" href="/image/favicons/fav.svg">
    <link rel="icon" sizes="any" type="image/svg+xml" href="/image/favicons/fav.svg">
    <link href="/css/swiper.min.css" rel="stylesheet">
    <link href="{{mix('css/app.css')}}" rel="stylesheet">
    {{-- @auth
            <script>
                var auth_user = {!! auth()->user()->toJson() !!};
                console.log(auth_user)
            </script>
        @else
            <script>
                var auth_user = null;
            </script>
        @endauth --}}

</head>

<body>

    <!-- React root DOM -->
    <div id="root">
    </div>

    <!-- React JS -->
    <script src="{{ mix('js/app.js') }}" defer></script>
    

</body>
</html>