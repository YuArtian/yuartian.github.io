# vite 实现原理

> <http://www.zhufengpeixun.com/jg-vue/vue-analyse/vite.html#%E4%B8%80-%E4%BB%80%E4%B9%88%E6%98%AFvite%EF%BC%9F>

> 什么是 vite？
> <https://molunerfinn.com/learn-vite/#%E4%BB%80%E4%B9%88%E6%98%AF-Vite>

> <https://mp.weixin.qq.com/s/oroQSMSPxtSEfnjuxu2pew>

Vite，一个基于浏览器原生 ES imports 的开发服务器
利用浏览器去解析 imports，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随起随用
同时不仅有 Vue 文件支持，还搞定了热更新，而且热更新的速度不会随着模块增多而变慢
针对生产环境则用 rollup 打包

Webpack 的热更新原理简单来说就是，一旦发生某个依赖改变，就将这个依赖所处的 module 更新，并将新的 module 发送给浏览器重新执行
由于我们只打了一个 bundle.js，所以热更新的话也会重新打这个 bundle.js。试想如果依赖越来越多，就算只修改一个文件，理论上热更新的速度也会越来越慢
