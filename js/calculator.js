"use strict";
var calculatorCtrl = (function() {
  var countFractional = function(number) {
    if (number <= 0) {
      return 1;
    } else {
      return (number * countFractional(number - 1));
    }
  };
  return {
    add: function(a, b) {
      if (isNaN(a) || isNaN(b)) {
        return "Invalid input values";
      } else {
        return a + b;
      }
    },
    substract: function(a, b) {
      if (isNaN(a) || isNaN(b)) {
        return "Invalid input values";
      } else {
        return a - b;
      }
    },
    multiply: function(a, b) {
      if (isNaN(a) || isNaN(b)) {
        return "Invalid input values";
      } else {
        return a * b;
      }
    },
    divide: function(a, b) {
      if (isNaN(a) || isNaN(b) || b <= 0) {
        return "Invalid input values";
      } else {
        return a / b;
      }
    },
    fractional: function(a) {
      if (isNaN(a)) {
        return "Invalid input value";
      } else {
        return countFractional(a);
      }
    },
    square: function(a) {
      if (isNaN(a) || a < 0) {
        return "Invalid input value";
      } else {
        return Math.sqrt(a);
      }
    },
    power: function(a) {
      if (isNaN(a)) {
        return "Invalid input value";
      } else {
        return a * a;
      }
    }
  };
})();
