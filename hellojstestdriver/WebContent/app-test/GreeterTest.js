GreeterTest = TestCase("GreeterTest");

GreeterTest.prototype.testGreet = function() {
  var greeter = new Application.Greeter();
  assertEquals("Hello World!", greeter.greet("World"));
};