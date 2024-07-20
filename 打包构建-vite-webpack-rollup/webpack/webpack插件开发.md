# webpack插件开发

> <https://www.xuwenchao.site/blogs/write-a-webpack-plugin.html#webpack-%E6%8F%92%E4%BB%B6%E7%9A%84%E5%9F%BA%E6%9C%AC%E7%BB%84%E6%88%90%E3%80%81%E5%B7%A5%E4%BD%9C%E6%96%B9%E5%BC%8F>

## webpack 插件的基本组成、工作方式

插件是一个可实例化的对象，该对象原型中拥有 `apply` 方法
`apply` 方法会被 webpack compiler 调用，并且 compiler 对象可在整个编译生命周期访问

### Compiler 对象
>
> <https://webpack.js.org/api/compiler-hooks/>

在插件模板中可以看到在插件的 apply 方法中可以获取到 compiler 对象，该对象可以理解为每当启动一次 webpack 都会创建一次的编译器对象

### Compilation 对象
>
> <https://webpack.js.org/api/compilation-hooks/>

在插件模板中可以看到从 compiler hooks 钩子函数中可以获取到 compilation 对象，compilation 就跟字面意思一样，可理解为 compiler 的一次构建行为、资源。 比如在 webpack 开发模式中，每一次文件变化，compiler 都会创建一次 compilation

### 挂载事件

Tapable (opens new window)是一个暴露了许多钩子函数的类，因为 compiler 和 compilation 都是一个 Tapable 的实例， 所以插件中能够通过 Tapable 的方法在 webpack 暴露出来的钩子函数中挂载插件自定义的函数。

比如插件模板中的 compiler.hooks.emit.tapAsync，表示插件在 compiler 的 emit （生成资源到 output 目录之前）钩子函数中挂载了一个异步函数。 插件的主要功能都在这个函数中完成，比如改变输出的源文件等

- 通过 compilation.assets 可以访问到本次编译输出的所有资源
   通过以下方法可以改变输出资源，对应资源的 source 属性是一个函数， 这个函数返回的是最终输出的文本结果，size 属性也是一个函数，返回的是文本的大小。

   ```js
   compilation.assets[finalOutputName] = {
      source: () => html,
      size: () => html.length
   }
   ```
