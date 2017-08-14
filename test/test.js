var expect    = require("chai").expect;
var mathFunctions = require('../src/functions');

describe("Math Operations", function() {

  describe('addition', function(){
    it('should return the correct addition of two numbers', function(){
      expect(mathFunctions.add(3, 4)).to.equal(7);
      expect(mathFunctions.add(13, -4)).to.equal(9);
    })
  })

  describe('division', function(){
    it('should return the correct division of two numbers', function(){
      expect(mathFunctions.divide(3, 4)).to.equal(3/4);
      expect(mathFunctions.divide(13, -4)).to.equal(13/-4);
    })
  })

  describe('multiplication', function(){
    it('should return the correct division of two numbers', function(){
      expect(mathFunctions.multiply(3, 0)).to.equal(0);
      expect(mathFunctions.multiply(13, -4)).to.equal(13 * -4);
      expect(mathFunctions.multiply(13, 1)).to.equal(13);
    })
  })


  });
