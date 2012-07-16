describe("Basic Assumptions", function() {

    it("has ExtJS4 loaded", function() {
        expect(Ext).toBeDefined();
        expect(Ext.getVersion()).toBeTruthy();
        expect(Ext.getVersion().major).toEqual(4);
    });

    it("has loaded AM code",function(){
        expect(AM).toBeDefined();
    });

    it("AM has Users controller",function(){
        expect(AM.getController('Users')).toBeDefined();
    });
});