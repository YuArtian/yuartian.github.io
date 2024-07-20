# pinia-vuex对比

## pinia 对比 vuex 的优点


1. 更好的类型推断
2. vuex 是单仓库数状结构(状态嵌套过深，不好维护)，而 pinia 是多仓库模式, 每个模块都是一个独立的 store, 状态是扁平的
3. pinia 更加灵活，更贴合 vue3 的响应式系统 和 Composition API。 Store 之间可以互相引用，可以更好的实现模块化
4. pinia 中没有 mutation 的概念，不用像 vuex 一样纠结使用 action 还是 mutation



### vuex 中 action 和 mutation 的区别

mutation 必须是同步的，而 action 并没有这个限制

至于 mutation 为什么必须是同步的，是因为 mutation 是用来修改状态的，而状态的修改必须是同步的，否则就会出现状态不可预测的情况 (异步的情况下，状态的修改顺序是不确定的)

*>* *<**https://vuex.vuejs.org/zh/guide/mutations.html#%E4%BD%BF%E7%94%A8%E5%B8%B8%E9%87%8F%E6%9B%BF%E4%BB%A3-mutation-%E4%BA%8B%E4%BB%B6%E7%B1%BB%E5%9E%8B**>*

**action 的作用** 是用来处理异步操作，或者批量操作多个 mutation（也就是提取公共逻辑 / 实现逻辑复用）

pinia 中解决了 vuex 中到底是用 action 还是 mutation 的问题，因为 pinia 中没有 mutation 的概念，只有 action，所以不会出现 mutation 必须是同步的问题



## pinia 实现

pinia 是一个 vue 插件（具有 install 方法）, 使用 effectScope 将 Store 的 State 包裹，这样就可以停止依赖收集

每一个 Store 也是一个 effectScope，这样就可以实现 Store 的独立卸载

每一个 store 都是一个 reactive，可以通过 provide/inject 传递给子组件，这样就可以实现 store 的共享

将所有的 store 放到一个全局的 Map 中，把 id 和 Store 对应起来。这样就可以实现多 store 的管理

在 install 初始化的时候, 把 pinia provide 到全局。

创建 Store 的时候，使用 defineStore(idOrOptions, setup)，创建一个闭包，返回 useStore 函数，保存用户传入的 storeId 和 setup 函数

在使用的时候需要调用 useStore 方法，useStore 会把 之前 provide 到全局的 pinia 实例 inject 进来，然后根据 storeId 找到对应的 store

如果没有找到则根据用户提供的 options 创建 store，并且把 store 存入当前 pinia 实例属性 _s 中，用 Map 数据结构存储

### pinia 插件

pinia.use(plugin) 可以使用插件，插件是一个函数，接收一个 pinia 实例作为参数

插件就是利用 $subscribe 和 $onActive 来实现一些功能
