const path = require('path')
const mix = require('laravel-mix')
require('laravel-mix-react-css-modules')
require('laravel-mix-react-typescript-extension')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
  .reactTypeScript('resources/js/index.tsx', 'public/js/app.js')
  .reactCSSModules('[name]__[local]___[hash:base64:5]')
  .sass('resources/sass/app.scss', 'public/css/app.css')
  .webpackConfig({
    resolve: {
      modules: ['node_modules', path.join(__dirname, 'resources/js')],
    },
  })
  .version()
