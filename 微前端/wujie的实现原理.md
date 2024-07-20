# wujie 的实现原理

> <https://zhuanlan.zhihu.com/p/442815952>

在主应用中创建 Iframe，Iframe 负责加载子应用 js，Iframe url 域名和主应用保持一致
使用 attachShadow 创建 shadowRoot，主应用提供一个容器给到 shadowRoot 插拔

- 实现了子应用保活
- 不仅能够做到静态资源的预加载，还可以做到子应用的预执行
   预执行会阻塞主应用的执行线程，所以无界提供 fiber 执行模式，采取类似 react fiber 的方式间断执行 js，每个 js 文件的执行都包裹在 requestidlecallback 中，每执行一个 js 可以返回响应外部的输入，但是这个颗粒度是 js 文件，如果子应用单个 js 文件过大，可以通过拆包的方式降低体积达到 fiber 执行模式效益最大化
- 支持 Vite
- 利用 shadow dom 实现 css 的隔离
- 利用 Iframe 实现 js 的隔离
- 底层采用 proxy + Object.defineproperty 的方式将 js-iframe 中对 dom 操作劫持代理到 webcomponent shadowRoot 容器中，开发者无感知也无需关心
- 多种通信方式：window.parent 直接通信、props 数据注入、去中心化 EventBus 通信机制
