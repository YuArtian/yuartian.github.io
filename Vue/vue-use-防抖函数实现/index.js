function useDebounceFn(fn, ms, options) {
  return createFilterWrapper(debounceFilter(ms, options), fn);
}
function createFilterWrapper(filter, fn) {
  function wrapper(thisArg, ...args) {
    filter(() => fn.apply(thisArg, args), { fn, thisArg: thisArg, args });
  }
  return wrapper;
}

function debounceFilter(ms, options) {
  let timer;
  let maxTimer;

  const filter = (invoke) => {
    const duration = ms;
    const maxDuration = options.maxWait;

    if (timer) console.log("清除timer1");
    clearTimeout(timer);

    if (duration <= 0 || (maxDuration !== undefined && maxDuration <= 0)) {
      console.log("第1处");
      if (maxTimer) {
        clearTimeout(maxTimer);
        maxTimer = null;
      }
      return invoke();
    }

    // Create the maxTimer. Clears the regular timer on invokation
    if (maxDuration && !maxTimer) {
      console.log("创建maxTimer");
      maxTimer = setTimeout(() => {
        console.log("maxTimer trigger");
        if (timer) console.log("清除timer2");
        clearTimeout(timer);
        maxTimer = null;
        invoke();
      }, maxDuration);
    }

    // Create the regular timer. Clears the max timer on invokation
    timer = setTimeout(() => {
      console.log("timer trigger");
      if (maxTimer) console.log("清除maxTimer");
      clearTimeout(maxTimer);
      maxTimer = null;
      invoke();
    }, duration);
    console.log("创建timer");
  };

  return filter;
}

let updated = 0;
const debouncedFn = useDebounceFn(
  () => {
    updated += 1;
    console.log("updated", updated);
  },
  1000,
  { maxWait: 2000 },
);
let clicked = 0;
const clickedFn = () => {
  clicked += 1;
  console.log("clicked", clicked);
  debouncedFn();
};
