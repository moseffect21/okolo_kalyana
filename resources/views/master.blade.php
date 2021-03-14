<!DOCTYPE html>
<html>
    <head lang="{{ str_replace('_', '-', app()->getLocale()) }}">
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <script defer src="{{ mix('js/entry-client.js') }}"></script>
    </head>
 {!! Ssr::entry('js/entry-server.js')->fallback('<body><div id="app"></div></body>')->render() !!}
</html>


