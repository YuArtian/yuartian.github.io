# Vite Server 是如何处理页面资源的？

> Vite Server 是如何处理页面资源的？
> <https://juejin.cn/post/7112031759163719694>

> vite 原理解析
> <https://molunerfinn.com/learn-vite/#%E5%AE%A2%E6%88%B7%E7%AB%AF>

Vite 用 connect 包来创建一个 DevServer，然后通过中间件的方式来处理请求
当一个请求发送到 server 时，会经过一个个的中间件，中间件本质是一个回调函数，每次请求都会执行回调。
