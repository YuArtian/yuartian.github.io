# webpack loader开发

> <https://www.xuwenchao.site/blogs/webpack-write-a-loader.html#webpack-loader-%E5%BC%80%E5%8F%91%E5%85%A5%E9%97%A8>

通过 webpack loaders (opens new window)中可以了解到，webpack 默认只能识别 JavaScript 以及 JSON 文件
如果要让 webpack 识别其它类型的文件，那么就要使用对应的 loader 来将文件转化为 webpack 的 modules (opens new window)。
