function inExtScope(testFunction)
{
	return function(){
    	Ext.require('app.TestApplication');
    	new app.TestApplication(testFunction);
    };
};

function getApplication()
{
	Ext.require('app.Application');
    return new app.Application();
};