function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const expensiveAPICall = () => console.log('API call made at:', new Date().toISOString());

const debouncedAPICall = debounce(expensiveAPICall, 2000);

console.log('Testing debounce:');
debouncedAPICall();
debouncedAPICall();
debouncedAPICall();