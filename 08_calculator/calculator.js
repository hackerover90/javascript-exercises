const add = function(firstNum, secondNum) {
	let sum = {
    firstNum,
    secondNum
  };
  return sum.firstNum + sum.secondNum;
};

const subtract = function(firstNum, secondNum) {
	let diff = {
    firstNum,
    secondNum
  };
  return diff.firstNum - diff.secondNum;
};

const sum = function(arr) {
	if (arr.length === 0) {
    return 0;
  } else if (arr.length === 1) {
    return arr[0];
  } else {
    return arr.reduce((total, currentValue) => total + currentValue, 0);
  }
};

const multiply = function(arr) {
  return arr.reduce((product, num) => product * num, 1);
};

const power = function(base, exponent) {
  let result = base;
  if (exponent == 0) {
    return 1;
  } else {
    for (let i = 0; i < exponent - 1; i++) {
      result *= base;
    }
    return result;
  }
};

const factorial = function(num) {
	if (num == 0) {
    return 1;
  } else {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
