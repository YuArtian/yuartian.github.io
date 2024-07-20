# rollup如何将第三方依赖打包进bundle中

> 如何使用 rollup 引入第三方模块 bundle 整个输出
> <https://github.com/wuhonglei/how-to-use-rollup?tab=readme-ov-file#%E4%BA%8C%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-rollup-%E5%BC%95%E5%85%A5%E7%AC%AC%E4%B8%89%E6%96%B9%E6%A8%A1%E5%9D%97-bundle-%E6%95%B4%E4%B8%AA%E8%BE%93%E5%87%BA>

使用 `@rollup/plugin-node-resolve` 插件，可以将第三方模块打包进 bundle 内容
有些第三方模块是 CommonJS 模块，需要使用 `@rollup/plugin-commonjs` 插件

## 解释

rollup 打包时，默认不会处理第三方模块的代码，即 bundle 文件中不会引入第三方模块的源码

对于 CommonJS 环境和 Webpack 项目，这并不会产生问题，因为项目中使用该 npm 模块时，会自动安装项目的 dependencies。 这个点可以从打包生成的文件看出，模块中会直接 require 第三方模块

但如果在浏览器引入该模块，则需要将第三方模块打入 bundle 内容，使用 @rollup/plugin-node-resolve
