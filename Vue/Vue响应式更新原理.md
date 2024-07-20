# Vue 响应式更新原理
>
> 为什么说 Vue 的响应式更新精确到组件级别？（原理深度解析）
> <https://cloud.tencent.com/developer/article/2383636>
> 浅谈 React 与 Vue 更新机制的差异
> <https://www.bakerchen.top/blogs/React/2023/vue-vs-react(update).html>

首先 Vue 会对数据进行响应式处理，这个过程是在 Vue 实例化时进行的
Vue2 会遍历 data 中的所有属性，使用 Object.defineProperty 方法重写这些属性的 getter 和 setter。在 getter 中收集依赖，在 setter 中触发更新。
Vue3 使用 Proxy 代理对象，拦截对象的 get 和 set 方法。

当某个响应式数据发生变化的时候，它的setter函数会通知闭包中的Dep，Dep则会调用它管理的所有Watcher对象。触发Watch对象的 update 方法，update 方法会调用 queueWatcher 方法，将 Watcher 对象放入一个队列中。

## watcher 和 Dep 的关系
>
> <https://xie.infoq.cn/article/a4c3ee004cb054782e6e2e778>
