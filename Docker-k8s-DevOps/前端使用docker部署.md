# 使用docker部署前端项目

> <https://juejin.cn/post/6844903793348329486>
> 为了更深入理解前端部署，我们将从最原始的部署方案过渡到 Docker 与 Kubernetes，逐步进行优化，并使用 CICD 完善工程质量及部署效率
> <https://q.shanyue.tech/deploy>

## 镜像优化
>
> <https://github.com/qufei1993/Nodejs-Roadmap/blob/master/docs/devops/docker-nodejs.md#docker-%E9%95%9C%E5%83%8F%E4%BD%93%E7%A7%AF%E4%B8%8E%E6%9E%84%E5%BB%BA%E6%97%B6%E9%97%B4%E4%BC%98%E5%8C%96>
>
### copy package.json

拷贝package.json文件到工作目录时，把 package.json 与源文件分隔开写入镜像是一个很好的选择
**package.json需要单独添加**
Docker在构建镜像的时候，是一层一层构建的，仅当这一层有变化时，重新构建对应的层
如果package.json和源代码一起添加到镜像，则每次修改源码都需要重新安装npm模块，这样木有必要
所以，正确的顺序是: 添加package.json；安装npm模块；添加源代码

## eggjs
>
> <https://github.com/qufei1993/Nodejs-Roadmap/blob/master/docs/devops/docker-nodejs.md#egg-%E6%A1%86%E6%9E%B6-docker-%E5%AE%B9%E5%99%A8%E5%8C%96>

在 Egg 里面，如果是 egg-scripts start --daemon，去掉 --daemon 直接 egg-scripts start 即可，否则 Docker 容器会无法启动。

## docker中上传静态文件到阿里云OSS
>
> <https://q.shanyue.tech/deploy/oss#dockerfile-%E4%B8%8E%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F>

由于 Dockerfile 同代码一起进行管理，我们不能将敏感信息写入 Dockerfile。

故这里使用 ARG 作为变量传入。而 ARG 可通过 docker build --build-arg 抑或 docker-compose 进行传入。

```yaml
FROM node:14-alpine as builder
 
ARG ACCESS_KEY_ID
ARG ACCESS_KEY_SECRET
ARG ENDPOINT
ENV PUBLIC_URL https://shanyue-cra.oss-cn-beijing.aliyuncs.com/
 
WORKDIR /code
 
# 为了更好的缓存，把它放在前边
RUN wget http://gosspublic.alicdn.com/ossutil/1.7.7/ossutil64 -O /usr/local/bin/ossutil \
  && chmod 755 /usr/local/bin/ossutil \
  && ossutil config -i $ACCESS_KEY_ID -k $ACCESS_KEY_SECRET -e $ENDPOINT
 
# 单独分离 package.json，是为了安装依赖可最大限度利用缓存
ADD package.json yarn.lock /code/
RUN yarn
 
ADD . /code
RUN npm run build && npm run oss:cli
 
# 选择更小体积的基础镜像
FROM nginx:alpine
ADD nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder code/build /usr/share/nginx/html
```
