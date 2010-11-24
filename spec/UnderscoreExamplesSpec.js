describe("UnderscoreExamples", function() {

  beforeEach(function() {

  });

  
  it("should be defined", function() {
    expect(_.methods()).toBeDefined();
  });

  it("should map numbers", function() {
    expect(_.map([1, 2, 3], function(num){ return num*num })).toEqual([1,4,9]);
  });

  it("should map numbers oop-style", function() {
    expect(_([1,2,3]).map(function(num) { return num*num })).toEqual([1,4,9]);
  });

  it("should be chainable", function() {
    expect(
      _([1,2,3])
          .chain()
          .map(function(num) { return num*num })
          .select(function(num) { return num < 9 })
          .value())
        .toEqual([1,4]);
  })

});