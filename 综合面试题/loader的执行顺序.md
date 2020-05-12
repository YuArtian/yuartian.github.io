# loader 的执行顺序

> https://imweb.io/topic/5d4a94a08db073cf44ca8cd0

Loader 会从右到左的依次执行

- 最后的 loader 最早调用，将会传入原始资源内容
- 第一个 loader 最后调用，期望值是传出 JavaScript和 source map（可选）
- 中间的 loader 执行时，会传入前一个 loader 传出的结果

##### 获取用户自定义参数

loader-utils 包获取传递给 loader 的选项

##### 控制loader执行



