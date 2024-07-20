function runLimitedConcurrentRequests(requests, maxConcurrent) {
  let index = 0;
  let activeRequests = 0;
  let results = new Array(requests.length);
  let resolve, reject;

  function startNext() {
    if (index >= requests.length && activeRequests === 0) {
      return resolve(results);
    }

    while (activeRequests < maxConcurrent && index < requests.length) {
      const currentIndex = index++;
      activeRequests++;
      requests[currentIndex]()
        .then((result) => {
          results[currentIndex] = result;
        })
        .catch((error) => {
          results[currentIndex] = { error };
        })
        .finally(() => {
          activeRequests--;
          startNext();
        });
    }
  }

  return new Promise((res, rej) => {
    resolve = res;
    reject = rej;
    startNext();
  });
}

// Example usage:
// Mock request function with random delay
function mockRequest(id, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.1) {
        console.log(`Request ${id} completed`);
        resolve(`Result from request ${id}`);
      } else {
        reject(`Error from request ${id}`);
      }
    }, delay);
  });
}

// Create an array of 100 mock requests
const requests = Array.from(
  { length: 100 },
  (_, i) => () => mockRequest(i, Math.random() * 2000),
);

// Run the requests with a maximum of 6 concurrent requests
runLimitedConcurrentRequests(requests, 6).then((results) => {
  console.log("All requests completed");
  console.log(results);
});
