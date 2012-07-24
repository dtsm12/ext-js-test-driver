StartTest(function(t) {
    t.diag("Basic");

    t.ok(Ext, 'ExtJS is here');
    t.ok(Ext.Window, '.. indeed');

    t.done();   // Optional, marks the correct exit point from the test
});