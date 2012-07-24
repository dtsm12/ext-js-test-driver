describe("Application tests", function() {

	it("has loaded AM code via Application", function() {
    	var application = app.ExtTestHelper.getApplication();
		expect(application.name).toEqual('AM');
	});

	it("AM has Users controller", function() {
    	var application = app.ExtTestHelper.getApplication();
		expect(application.getController('Users').models[0]).toEqual('User');
	});

});