# npm 私有仓库搭建

常用的 npm 私有仓库框架：

Nexus: <https://www.sonatype.com/nexus-repository-oss>
Verdaccio: <https://verdaccio.org/zh-CN/docs/what-is-verdaccio>

## 使用 verdaccio 搭建npm私有仓库
>
> verdaccio 官方文档
> <https://verdaccio.org/zh-CN/docs/what-is-verdaccio>
> Verdaccio 搭建 npm 私有仓库
> <https://juejin.cn/post/7060327687851606047#heading-0>
> npm 私有仓库工具 Verdaccio 搭建, docker 镜像
> <https://zhaomenghuan.js.org/blog/npm-private-repository-verdaccio.html#docker-%E6%96%B9%E5%BC%8F%E5%AE%89%E8%A3%85>

Verdaccio 是一个 Node.js创建的轻量的私有npm proxy registry

Nexus 基于 Java, 可以搭建私有仓库，支持 npm、maven、docker 等多种仓库

使用 `npm publish` 发布
在 .npmrc 文件中配置私有仓库地址

```shell
registry=http://localhost:4873
```

权限 token 可以写在 gitlab 环境变量里
