Ext.define('app.Application', {
    extend: 'Ext.app.Application',
    requires: ['app.ExtTestHelper'],

    constructor: function(launchFunction) {
        config = {
            name: 'AM',

            // automatically create an instance of AM.view.Viewport
            autoCreateViewport: true,

            controllers: [
                'Users'
            ]
        };
        
        if(launchFunction)
        {
        	config.launch = launchFunction;
        }

        // instantiate ext.app.Application with specific configuration
        this.superclass.constructor(config);
     }
});
