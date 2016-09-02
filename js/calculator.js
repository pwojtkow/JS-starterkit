"use strict";
var calculatorCtrl = (function() {

  var _fractional = function(a) {
      if (isNaN(a)) {
        return "Invalid input value";
      } else if (a <= 0) {
        return 1;
      } else {
        return (a * _fractional(a - 1));
      }
    },
    _add = function(a, b) {
      if (isNaN(a) || isNaN(b)) {
        return "Invalid input values";
      } else {
        return a + b;
      }
    },
    _substract = function(a, b) {
      if (isNaN(a) || isNaN(b)) {
        return "Invalid input values";
      } else {
        return a - b;
      }
    },
    _multiply = function(a, b) {
      if (isNaN(a) || isNaN(b)) {
        return "Invalid input values";
      } else {
        return a * b;
      }
    },
    _divide = function(a, b) {
      if (isNaN(a) || isNaN(b) || b <= 0) {
        return "Invalid input values";
      } else {
        return a / b;
      }
    },
    _square = function(a) {
      if (isNaN(a) || a < 0) {
        return "Invalid input value";
      } else {
        return Math.sqrt(a);
      }
    },
    _power = function(a) {
      if (isNaN(a)) {
        return "Invalid input value";
      } else {
        return a * a;
      }
    };

  return {
    add: function(a, b) {
      return _add(a, b);
    },
    substract: function(a, b) {
      return _substract(a, b);
    },
    multiply: function(a, b) {
      return _multiply(a, b);
    },
    divide: function(a, b) {
      return _divide(a, b);
    },
    fractional: function(a) {
      return _fractional(a);
    },
    square: function(a) {
      return _square(a);
    },
    power: function(a) {
      return _power(a);
    }
  };
})();
