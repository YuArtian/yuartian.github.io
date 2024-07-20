# HTTP
>
> 3.1 HTTP 常见面试题
> <https://molunerfinn.com/learn-vite/#%E5%AE%A2%E6%88%B7%E7%AB%AF>

## Http 缓存 cache-control immutable
>
> <https://www.cnblogs.com/ziyunfei/p/5642796.html>
> <https://juejin.cn/post/7070413705309061134>

使用了 Cache-Control: immutable 的资源，浏览器会认为这个资源不会改变，所以在下次请求时，会直接使用缓存，不会再次请求服务器。
即使过期时间到了，不会走协商缓存，而是直接 200 请求。也就是说 immutable 是没有 304的

## HTTP 重定向
>
> <https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Redirections>
> <https://www.cnblogs.com/wuguanglin/p/redirect.html>

- 永久重定向 301 308
- 临时重定向 302 303 307
- 特殊重定向 300 304
Location: 重定向到指定的URL

### 302 303 307 临时重定向
>
> <https://zh.wikipedia.org/wiki/HTTP_302>
> <https://zhuanlan.zhihu.com/p/60669395>

302 允许各种各样的重定向，一般情况下都会实现为到 GET 的重定向，但是不能确保 POST 会重定向为 POST；
而 303 只允许任意请求到 GET 的重定向；
307 和 302 一样，除了不允许 POST 到 GET 的重定向

- 临时URI应该由响应头部中的Location字段给出。
- 除非请求方法是HEAD ，否则响应的实体应该包含一个带有超链接到新的URI的短HTML注释。
- 只有当服务器发出Cache-Control或Expires头字段进行指示，此响应才能被缓存，否则不能被缓存。

### 301 308 永久重定向

301 状态码表明目标资源被永久的移动到了一个新的 URI，任何未来对这个资源的引用都应该使用新的 URI。
308 的定义实际上和 301 是一致的，唯一的区别在于，308 状态码不允许浏览器将原本为 POST 的请求重定向到 GET 请求上。
