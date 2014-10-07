requirejs.config({
    baseUrl: '/resources/js/plugins',
    paths: {
        'main'              : '../main',
        'almond'            : '../libs/almond.0.2.5',
        //Libs
        'jquery'            : '../libs/jquery-1.8.3.min',
        'selectivizr'       : '../libs/selectivizr-min'
    },
    shim: {
    },
    deps: ['main', 'selectivizr']
});