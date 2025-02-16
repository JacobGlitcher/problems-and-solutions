// simple fibonacci
function fibonacci(n) {
  if (n < 2) return n

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// cached fibonacci
function memoizedFibonacci() {
  const cache = new Map();

  return function fib(n) {
    if (n < 2) return n

    if (cache.has(n)) return cache.get(n)

    const res = fib(n - 1) + fib(n - 2)

    cache.set(n, res)

    return res
  }
}

// performance showcase
function runPerformanceTest() {
  const fib = memoizedFibonacci();

  console.log('Non-memoized results:');
  const start1 = performance.now();
  console.log(`fibonacci(10) = ${fibonacci(30)}`);
  const end1 = performance.now();
  console.log(`Time taken: ${end1 - start1}ms`);

  console.log('\nMemoized results:');
  const start2 = performance.now();
  console.log(`fib(10) = ${fib(30)}`);
  const end2 = performance.now();
  console.log(`Time taken: ${end2 - start2}ms`);
}

runPerformanceTest();