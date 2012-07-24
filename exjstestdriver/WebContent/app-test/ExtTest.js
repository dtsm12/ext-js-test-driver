ExtTest = TestCase("ExtTest");

ExtTest.prototype.testExtLoaded = function() {
	assertEquals(4, Ext.getVersion().major);
};

ExtTest.prototype.testAppLoaded = function() {
	
	var helper = new app.TestExtHelper("app.Application");
	
	helper.withApplication(function(app) {
		assertEquals("App is called HelloExt", "HelloExt", app.name);
	});
};