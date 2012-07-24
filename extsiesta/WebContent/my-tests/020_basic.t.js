StartTest(function(t) {
    t.diag("Basic");

    Ext.onReady(function() {alert('ready');});
    Ext.require('app.Application');
    var app = Ext.create('app.Application');
    
    t.ok(app, 'app.Application is here');
    t.is(app.name, 'AM', 'app.Application is called AM');

    t.done();   // Optional, marks the correct exit point from the test
});