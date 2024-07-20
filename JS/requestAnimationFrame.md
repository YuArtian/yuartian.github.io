# requestAnimationFrame
>
> Window：requestAnimationFrame() 方法
> <https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame>
>
## requestAnimationFrame 属于宏任务还是微任务？

requestAnimationFrame 是宏任务

requestAnimationFrame 是一个用于在下次重绘之前执行回调的API，它会在浏览器下次重绘之前执行回调函数
若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用 requestAnimationFrame()。requestAnimationFrame() 是一次性的，每次执行完回调函数后就会被清除

## requestAnimationFrame 到底解决了什么问题?
>
> 为什么我不建议你用js计时器来做动画效果，渲染帧的知识，你掌握了吗
> <https://www.bilibili.com/video/BV1gu411b7bS/?spm_id_from=333.337.search-card.all.click&vd_source=825473bb0b044dbfeca73fca932e0c5b>

浏览器的渲染是一帧一帧的，每一帧都是一个画面。但是渲染的时机是不确定的，浏览器会根据自己的性能来决定渲染的时机
如果我们使用定时器来做动画，那么定时器的时间间隔是固定的，这样就会导致：

- 空帧（什么都没做浪费了渲染帧）
- 跳帧（2个渲染帧之间出现了多次动画）导致动画不连续
- 计时器的定时时间虽然设置了16ms，但是由于js事件循环的机制，实际上定时器的时间间隔有可能大于16ms

而使用 requestAnimationFrame 来做动画，浏览器会保证在下一次渲染的时候运行传入的回调函数，这样就可以保证动画的帧率稳定，不会出现卡顿的现象
requestAnimationFrame 是解决渲染同步的问题的，不能解决大量计算的问题，因为 requestAnimationFrame 的回调函数是在下一帧渲染之前执行的，如果回调函数执行的时间过长，就会导致下一帧渲染的时间延迟，从而导致动画卡顿

但是 requestAnimationFrame 中执行了大量耗时计算，会导致降频，这样会导致动画卡顿，所以我们应该在 requestAnimationFrame 中尽量减少计算量，避免卡顿
