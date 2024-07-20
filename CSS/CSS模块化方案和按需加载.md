# CSS 方案
>
> CSS 模块化方案探讨（BEM、OOCSS、CSS Modules、CSS-in-JS ...）
> <https://segmentfault.com/a/1190000039772466>

> 杂谈：CSS 方案选择以及按需加载
> <https://juejin.cn/post/7187341694533107749>

## BEM

语义化约束的 CSS 命名规范，Block Element Modifier

## Vue scoped style

在元素上添加 属性选择器 [data-v-xxxx]

### 深度作用选择器

:deep() 伪类选择器，可以使得样式穿透到子组件

## CSS Modules

CSS Modules 在使用时像 import 一个 JS Module 一样去 import 一个 CSS Module
每一个 CSS 文件都是一个独立的模块，每一个类名都是该模块所导出对象的一个属性
在使用时明确指定所引用的 CSS 样式
CSS Modules 在打包时会自动将 id 和 class 混淆成全局唯一的 hash 值，从而避免发生命名冲突问题
通过 css-loader 的 modules 配置项，或者 postcss-modules 插件 来开启 CSS Modules 功能

CSS Modules 特性：

作用域：模块中的名称默认都属于本地作用域，定义在 :local 中的名称也属于本地作用域，定义在 :global 中的名称属于全局作用域，全局名称不会被编译成哈希字符串。
命名：对于本地类名称，CSS Modules 建议使用 camelCase 方式来命名，这样会使 JS 文件更干净，即 styles.className。
组合：使用 composes 属性来继承另一个选择器的样式，这与 Sass 的 @extend 规则类似。
变量：使用 @value 来定义变量，不过需要安装 PostCSS 和 postcss-modules-values 插件。

## CSS-in-JS

CSS-in-JS 是一种可以将 CSS 样式写在 JS 文件里的技术

### styled-components
>
> styled-components 是如何实现的
> <https://magicly.gitbooks.io/react/content/css/styled-components-how.html>

使用 模板字符串 编写 CSS 样式，利用 插值表达式 来引用 JS 变量，从而实现动态样式

### babel-plugin-import

现在大多数都支持 ESM，可以利用 tree shaking 来按需加载组件，但是对于一些老项目，还是可以使用 babel-plugin-import 来实现按需加载。

```js
import { Alert } from 'antd';
// 会被默认转成如下代码
import Alert from 'antd/lib/alert';
import 'antd/lib/alert/style';
```
