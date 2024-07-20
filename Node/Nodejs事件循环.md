# Nodejs 事件循环

> <https://nodejs.cn/en/learn/asynchronous-work/event-loop-timers-and-nexttick>
> <https://juejin.cn/post/6844903999506923528#heading-0>
> <https://vue3js.cn/interview/NodeJS/event_loop.html#%E4%BA%8C%E3%80%81%E6%B5%81%E7%A8%8B>

当 Node.js 启动时，它会初始化事件循环

```js
   ┌───────────────────────────┐
┌─>│           timers          │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │
   └───────────────────────────┘
```

每个阶段都有一个要执行的回调的 FIFO 队列
当事件循环进入给定阶段时，它将执行特定于该阶段的任何操作，然后在该阶段的队列中执行回调，直到队列耗尽或执行了最大数量的回调
当队列已耗尽或达到回调限制时，事件循环将进入下一阶段，依此类推

## 阶段概述
>
> <https://nodejs.cn/en/learn/asynchronous-work/event-loop-timers-and-nexttick#%E9%98%B6%E6%AE%B5%E6%A6%82%E8%BF%B0>
定时器：此阶段执行由 setTimeout() 和 setInterval() 安排的回调。

待处理的回调：执行推迟到下一次循环迭代的 I/O 回调。

空闲，准备：仅在内部使用。

轮询：检索新的 I/O 事件；执行 I/O 相关回调（几乎所有回调，除了关闭回调、由定时器调度的回调和 setImmediate()）；node 将在适当的时候在此处阻塞。

检查：setImmediate() 回调在此处调用。

关闭回调：一些关闭回调，例如 socket.on('close', ...)。

为了防止轮询阶段使事件循环挨饿，libuv（实现 Node.js 事件循环和平台所有异步行为的 C 库）在停止轮询更多事件之前也有一个硬最大值（依赖于系统）。默认情况下，这个值是 1024 个回调。可以通过在环境变量 UV_THREADPOOL_SIZE 中设置更改此值

## process.nextTick() 与 setImmediate()

process.nextTick() 与 setImmediate()
就用户而言，我们有两个类似的调用，但它们的名称令人困惑。

- process.nextTick() 在同一阶段立即触发
- setImmediate() 在事件循环的下一次迭代或 'tick' 上触发
process.nextTick() 比 setImmediate() 触发得更快
<!-- 我们建议开发者在所有情况下都使用 setImmediate()，因为它更容易推断。 -->

### process.nextTick() 应用
>
> <https://nodejs.cn/en/learn/asynchronous-work/event-loop-timers-and-nexttick#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8-processnexttick>

在 EventEmitter 的实现中，process.nextTick() 用于触发 'newListener' 事件，以便在添加新监听器之前触发它
