Ext.require('app.TestApplication');
Ext.onReady(function() {new app.TestApplication(function() {
    //include the tests in the test.html head
    jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
    jasmine.getEnv().execute();
});});