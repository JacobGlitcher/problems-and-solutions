function throttle(func, limit) {
  let inThrottle = false;

  return function (...args) {
    if (!inThrottle) {
      inThrottle = true;

      setTimeout(() => {
        func.apply(this, args)

        inThrottle = false;
      }, limit)
    }
  };
}

const logOnMouseEvent = () => console.log('Mouse Moved');
const throttleOnMouseMove = throttle(logOnMouseEvent, 1000)

window.addEventListener('mousemove', throttleOnMouseMove);
