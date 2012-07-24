Ext.define('app.TestApplication', {
    extend: 'app.Application',

    constructor: function(testFunction) {
        // instantiate ext.app.Application with specific configuration
        this.superclass.constructor();


        // invoke test
        testFunction();
        //alert(testFunction);
     },

});