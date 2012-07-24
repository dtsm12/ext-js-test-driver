Ext.Loader.setPath('extjasminejstestdriver', '/test/app');
Ext.Loader.setPath('test', '/test/app-test');
Ext.Loader.setPath('Ext', '/test/extjs/src');
Ext.Loader.setConfig({ enabled: true, syncModeEnabled: true });

Ext.require('app.TestApplication');
Ext.onReady(function() {new app.TestApplication(null, true);});