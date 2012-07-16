describe("Application tests", function() {

	/*
    it("has loaded AM code via TestApplication",function(){
    	Ext.require('app.TestApplication');
    	//Ext.onReady(function() {new app.TestApplication(function() {expect(AMC).toBeDefined();});});
    	new app.TestApplication(function() {expect(AM).toBeDefined();});
    });
	*/
    it("has loaded AM code via TestApplication", inExtScope(function() {expect(AM).toBeDefined();}));

});