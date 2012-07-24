Ext.define('app.ExtTestHelper', {
	
    statics: {
    	applicationInstance: null,
    	
    	getApplication: function (applicationName)
    	{
    		if(!this.applicationInstance && applicationName)
    		{
    			this.setApplication(Ext.create(applicationName));
    		}
    		return this.applicationInstance;
    	},
    	
    	setApplication: function (application)
    	{
    		this.applicationInstance = application;
    	}
    },
	
    constructor: function(applicationName) 
    {
    	if(applicationName)
    	{
    		this.applicationInstance = Ext.create(applicationName);
    	}
    },
	
	withApplication: function (testFunction)
	{
		return testFunction(this.applicationInstance);
	}
});