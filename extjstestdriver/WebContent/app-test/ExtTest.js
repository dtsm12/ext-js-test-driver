ExtTest = TestCase("ExtTest");

ExtTest.prototype.testExtLoaded = function() {
  assertEquals(4, Ext.getVersion().major);
};