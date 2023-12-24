const add = function(...theArgs) {
  return theArgs.reduce((sum, current) => sum + current, 0);
};

const subtract = function(...theArgs) {
	return Number(theArgs.reduce((sum, current) => sum - current));
};

const sum = function(...theArgs) {
  let flattened = [].concat.apply([], theArgs);
  return flattened.length === 0 ? 0	: Number(flattened.reduce((sum, current) => sum += current, 0));
};

const multiply = function(...theArgs) {
  let flattened = [].concat.apply([], theArgs);
  return flattened.length === 0 ? 0 : Number(flattened.reduce((product, current) => (product * current)));
};

const power = function(...theArgs) {
	let flattened = [].concat.apply([], theArgs);
  return flattened.length === 0 ? 0 : Number(flattened.reduce((base, power) => base ** power));
};

const factorial = function(num) {
  let arrayRange = Array.from({length: (num - 0)}, (value, index) => 1 + index);
  return num === 0 ? 1 :
    arrayRange.reduce((product, current) => (product * current));
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
