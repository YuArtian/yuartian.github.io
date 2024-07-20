console.log("countDownWorker.js loaded");
function countDownWorker(target) {
  console.log("countDownWorker target", target);
  // 每隔一秒调用一次
  setTimeout(() => {
    let now = new Date().valueOf();
    if (target <= now) {
      postMessage("end");
    } else {
      console.log("target - now", target - now);
      postMessage(target - now);
      countDownWorker(target);
    }
  }, 1000);
}

onmessage = (e) => {
  console.log("countDownWorker onmessage", e);
  countDownWorker(e.data);
};
