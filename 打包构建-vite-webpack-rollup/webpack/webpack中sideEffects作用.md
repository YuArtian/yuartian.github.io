# webpack中sideEffects作用
>
> 深入理解sideEffects配置
> <https://libin1991.github.io/2019/05/01/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3sideEffects%E9%85%8D%E7%BD%AE/>

sideEffects 写在 package json 中，用来告知 webpack 哪些文件具有副作用

实际项目中, 通常并不能简单的设置为 "sideEffects": false, 有些副作用是需要保留的, 比如引入样式文件

webpack 会认为所有 import 'xxx' 语句是仅引入而未使用, 如果你错误的将其声明成了”无副作用”, 它们就会被 tree-shaking 掉, 并且由于 tree-shaking 仅在 production 模式生效, 本地开发时可能一切仍是正常的, 生产环境并不能及时发现问题.

  ```json
  {
    "sideEffects": [
      "*.css"
    ]
  }
  ```
