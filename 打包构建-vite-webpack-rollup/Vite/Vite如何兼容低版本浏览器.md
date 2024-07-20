# Vite如何兼容低版本浏览器

> [【原理揭秘】Vite 是怎么兼容老旧浏览器的？你以为仅仅依靠 Babel？](https://my.oschina.net/u/4090830/blog/8604281)
>
> https://my.oschina.net/u/4090830/blog/8604281



利用 script 标签的 type 属性 module 和 nomodule：

- 对于 低版本不支持ESM的浏览器，不会执行 type = "module" 的代码
- 对于 支持 ESM 的浏览器会忽略 type = "nomodule" 的标签

这两个属性组合使用就是为了**决定浏览器在面对未知版本浏览器时的代码执行策略**



第一步，Vite 在页面最开始加载了 CSS 和 JS，加载 JS 的方式是使用 ESM

第二步，Vite 判断了现代浏览器的兼容性，如果是现代浏览器，则不执行 nomodule 中的代码，也不会使用 SystemJs 加载 legacy 文件，反之亦然。

第三部，Vite 对低版本浏览器使用 nomodule 的 script 标签，加载和执行 legacy 文件



不但要支持 ESM，还要支持如下高级语法。由于 ESM 中，**不像普通 script 一样会把错误抛到模块外部，内部出错也不会阻塞后续逻辑的执行和页面渲染**

- dynamic import
- import.meta
- async generator

```html
<script type="module">
    import.meta.url;
    import("_").catch(() => 1);
    async function* g() { }
    window.__vite_is_modern_browser = true;
</script>
```



其他的都会走 legacy.js

## 缺点

虽然代码不会重复执行，但是文件会重复加载