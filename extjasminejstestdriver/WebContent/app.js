/*
Ext.require('app.Application');
Ext.onReady(function() {new app.Application();});
*/

Ext.require('app.TestApplication');
Ext.onReady(function() {new app.TestApplication(function() {alert('foo bar');});});

/*
Ext.application({
    name: 'AM',

    // automatically create an instance of AM.view.Viewport
    autoCreateViewport: true,

    controllers: [
        'Users'
    ]
});
*/