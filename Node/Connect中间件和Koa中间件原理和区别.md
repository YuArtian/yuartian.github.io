# Connect中间件和Koa中间件原理和区别

Connect是一个node中间件（middleware）框架，每个中间件在http处理过程中通过改写request或（和）response的数据、状态，实现了特定的功能
Koa与Express中间件的区别：Express主要基于Connect中间件框架，中间件一个接一个的顺序执行，通常会将 response 响应写在最后一个中间件中
而koa主要基于co中间件框架，它的中间件是通过 async await 实现的，中间件执行顺序是“洋葱圈”模型。执行效果类似于Promise.all

源码比较
> <https://juejin.cn/post/6844903490167242760#heading-2>
