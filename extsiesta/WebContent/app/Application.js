Ext.define('app.Application', {
    extend: 'Ext.app.Application',

    constructor: function() {
        config = {
            name: 'AM',

            // automatically create an instance of AM.view.Viewport
            autoCreateViewport: true,

            controllers: [
                'Users'
            ]
        };

        // instantiate ext.app.Application with specific configuration
        this.superclass.constructor(config);
     }
});
