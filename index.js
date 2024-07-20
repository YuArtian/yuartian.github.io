let fps = 0;
let lastTime = performance.now();

function getFPS() {
  fps++;
  const currentTime = performance.now();
  if (currentTime - lastTime >= 1000) {
    show.innerHTML = `fps: ${fps}`;
    fps = 0;
    lastTime = currentTime;
  }
  requestAnimationFrame(getFPS);
}
requestAnimationFrame(getFPS);
