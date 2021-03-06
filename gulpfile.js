var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.styles([
    	'../../../vendor/semantic/ui/dist/semantic.min.css',
    	'master.css',
    ])
    .scripts([
    	'../../../vendor/components/jquery/jquery.min.js',
    	'../../../vendor/semantic/ui/dist/semantic.min.js',
    ])
    .copy('vendor/semantic/ui/dist/themes', 'public/css/themes');
});