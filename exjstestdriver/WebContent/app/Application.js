Ext.define('app.Application', {
    extend: 'Ext.app.Application',

    constructor: function() {
        config = {
	        	    name: 'HelloExt',
	        	    launch: function() {
	        	        Ext.create('Ext.container.Viewport', {
	        	            layout: 'fit',
	        	            items: [
	        	                {
	        	                    title: 'Hello Ext',
	        	                    html : 'Hello! Welcome to Ext JS.'
	        	                }
	        	            ]
	        	        });
	        	    }
	        	};

        // instantiate ext.app.Application with specific configuration
        this.superclass.constructor(config);
     }
});

