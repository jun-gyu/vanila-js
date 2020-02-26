const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  minus: function(a, b) {
    return a - b;
  },
  division: function(a, b) {
    return a / b;
  },
  times: function(a, b) {
    return a * b;
  },
  power: function(a, b) {
    return a ** b;
  }
};

const plus = calculator.plus(10, 3);
const minus = calculator.minus(10, 3);
const division = calculator.division(10, 3);
const times = calculator.times(10, 3);
const power = calculator.power(10, 3);

document.write(plus, "<br>");
document.write(minus, "<br>");
document.write(division, "<br>");
document.write(times, "<br>");
document.write(power, "<br>");
