"use strict";
describe('Calculator controller tests', function() {
  it('should add two numbers', function() {
    var result = calculatorCtrl.add(4, 3),
      expectation = 7;
    expect(expectation).toBe(result);
  });

  it('should substract two numbers', function() {
    var result = calculatorCtrl.substract(7, 3),
      expectation = 4;
    expect(expectation).toBe(result);
  });

  it('should divide two numbers', function() {
    var result = calculatorCtrl.divide(10, 5),
      expectation = 2;
    expect(expectation).toBe(result);
  });

  it('should multiply two number', function() {
    var result = calculatorCtrl.multiply(3, 3),
      expectation = 9;
    expect(expectation).toBe(result);
  });

  it('should count fractional for a number', function() {
    var result = calculatorCtrl.fractional(5),
      expectation = 120;
    expect(expectation).toBe(result);
  });

  it('should return 1 when count fractional from 0', function() {
    var result = calculatorCtrl.fractional(0),
      expectation = 1;
    expect(expectation).toBe(result);
  });

  it('should return 1 when count fractional from negative number', function() {
    var result = calculatorCtrl.fractional(-277),
      expectation = 1;
    expect(expectation).toBe(result);
  });

  it('should power a number', function() {
    var result = calculatorCtrl.power(9),
      expectation = 81;
    expect(expectation).toBe(result);
  });

  it('should square a number', function() {
    var result = calculatorCtrl.square(81),
      expectation = 9;
    expect(expectation).toBe(result);
  });

  it('should return zero when square a zero', function() {
    var result = calculatorCtrl.square(0),
      expectation = 0;
    expect(expectation).toBe(result);
  });

  it('should return invalid input message when square a negative number', function() {
    var result = calculatorCtrl.square(-34),
      expectation = "Invalid input value";
    expect(expectation).toBe(result);
  });

  it('should return invalid input message when try power a char', function() {
    var result = calculatorCtrl.power('g'),
      expectation = "Invalid input value";
    expect(expectation).toBe(result);
  });

  it('should return invalid input message when try sqare a char', function() {
    var result = calculatorCtrl.square('g'),
      expectation = "Invalid input value";
    expect(expectation).toBe(result);
  });

  it('should return invalid input message when adding char', function() {
    var result = calculatorCtrl.add(1, 'k'),
      expectation = "Invalid input values";
    expect(expectation).toBe(result);
  });

  it('should return invalid input message when substract char', function() {
    var result = calculatorCtrl.substract(1, 'k'),
      expectation = "Invalid input values";
    expect(expectation).toBe(result);
  });

  it('should return invalid input message when multiply char', function() {
    var result = calculatorCtrl.multiply(1, 'k'),
      expectation = "Invalid input values";
    expect(expectation).toBe(result);
  });

  it('should return invalid input message when divides char', function() {
    var result = calculatorCtrl.divide(1, 'k'),
      expectation = "Invalid input values";
    expect(expectation).toBe(result);
  });

  it('should return invalid input message when divide by zero', function() {
    var result = calculatorCtrl.divide(4, 0),
      expectation = "Invalid input values";
    expect(expectation).toBe(result);
  });

  it('should return invalid input message when count fractional from char', function() {
    var result = calculatorCtrl.fractional('k'),
      expectation = "Invalid input value";
    expect(expectation).toBe(result);
  });

});
