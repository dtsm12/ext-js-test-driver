Ext.define('app.TestExtHelper', {

	applicationInstance: null,
	
    constructor: function(applicationName) 
    {
    	this.applicationInstance = Ext.create(applicationName);
    },
	
	withApplication: function (testFunction)
	{
		//alert("withApplication: " + this.applicationInstance.name);
		testFunction.apply(this.applicationInstance,[this.applicationInstance]);
	}
});