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

  describe("select", function() {
    beforeEach(function() {
      fn = function(){};
    });

    it("should return empty array if nothing was matched", function() {
      expect([1,2,3].select(fn)).toEqual([]);
    });

    it("should return the values that match", function() {
      fn = function(i){ return i > 1; };
      expect([1,2,3].select(fn)).toEqual([2,3]);
    });
  });

  describe("reject", function() {
    beforeEach(function() {
      fn = function(){};
    });

    it("should return an empty array if everything was matched", function() {
      fn = function(i){ return true; };
      expect([1,2,3].reject(fn)).toEqual([]);
    });

    it("should return the elements that where not matched", function() {
      fn = function(i){ return i > 2; };
      expect([1,2,3].reject(fn)).toEqual([1,2]);
    });
  });
});

