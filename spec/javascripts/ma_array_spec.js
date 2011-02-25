var fn;

describe("Array", function() {
  describe("detect", function() {
    beforeEach(function() {
      fn = function(i){};
    });

    it("should return null if nothing was found", function() {
      expect([1,2,3].detect(fn)).toBeNull();
    });

    it("should return the correct value", function() {
      fn = function(i){ return i == 2; };
      expect([1,2,3].detect(fn)).toEqual(2);
    });
  });
});

