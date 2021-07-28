const mix = require('laravel-mix');
const config = require('./webpack.config');

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
    .webpackConfig(config)
    .setPublicPath('public/')
    .js('resources/js/app.js', 'js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .css('node_modules/element-ui/lib/theme-chalk/index.css', 'public/css/app.css')

