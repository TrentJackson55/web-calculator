const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const multiply = function(arr) {
  return arr.reduce((product, current) => {
    return product * current;
  });
};