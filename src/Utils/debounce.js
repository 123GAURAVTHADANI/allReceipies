export function debounce(fnc, delay) {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fnc(...args);
    }, delay);
  };
}
// required parameters( fnc , delay)
// dispatch(fetchData(seach)) - fnc
// 500 ms - delay
