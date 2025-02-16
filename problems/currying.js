// basic implementation
function sum(num = null) {
  let count = num

  return function innerSum(num) {
    if (num === undefined) return count

    count += num
    return innerSum
  }
}

console.log(sum(4)(3)(5)(13)(2)())

// a curry function that converts regular functions to curried ones
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }

    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

function add(a, b, c) {
  return a + b + c
}

function multiply(a, b, c) {
  return a * b * c
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));

const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4));