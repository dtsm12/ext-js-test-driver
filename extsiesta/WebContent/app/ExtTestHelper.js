Ext.define('app.ExtTestHelper', {

	applicationInstance: null,
	
    constructor: function(applicationName) 
    {
    	this.applicationInstance = Ext.create(applicationName);
    },
	
	withApplication: function (testFunction)
	{
		//alert("withApplication: " + this.applicationInstance.name);
		return testFunction(this.applicationInstance);
	},
	
	getApplication: function ()
	{
		return this.applicationInstance;
	}
});