var Harness = Siesta.Harness.Browser.ExtJS;

Harness.configure({
    title       : 'Awesome Test Suite',
    loaderPath  : { 'AM' : 'app' },

    preload     : [
        '../ext-4.1.0/resources/css/ext-all.css',
        '../ext-4.1.0/ext-all-debug.js'
    ]
});

Harness.start(
    '010_sanity.t.js',
    '020_basic.t.js'
);