describe("Basics", function() {
  var basics = new Basics();  

  it("should be able to make correct addition", function() {
    expect(basics.add(3, 2)).toEqual(5);
  });

});