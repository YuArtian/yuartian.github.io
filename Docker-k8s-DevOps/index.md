# Docker

## Q&A

### 如何在一个镜像里使用不同版本的 node

使用 `as` 关键字，创建一个多阶段构建（multi-stage build）的 Dockerfile，如下所示：

```Dockerfile
  FROM node:10.15.3-alpine as node10
  FROM node:12.13.0-alpine as node12
```
