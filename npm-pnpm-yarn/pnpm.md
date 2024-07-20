# pnpm
>
> <https://github.com/astonishqft/pnpm-monorepo-demo?tab=readme-ov-file#%E5%8F%AA%E5%85%81%E8%AE%B8pnpm>
>

## 相比于npm和yarn，pnpm的优势是什么？
>
> 相比于npm和yarn，pnpm的优势是什么？
> <https://fe.ecool.fun/topic-answer/b6d72acf-0360-4fc1-8835-6a6f8a3a4025?orderBy=updateTime&order=desc&tagId=10>

npm3+ 和 yarn 是通过铺平的扁平化的方式来管理 node_modules，解决了嵌套方式的部分问题，但是引入了幽灵依赖的问题，并且同名的包只会提升一个版本的，其余的版本依然会复制多次。

pnpm 则是用了另一种方式，不再是复制了，而是都从全局 store 硬连接到 node_modules/.pnpm，然后之间通过软链接来组织依赖关系。

这样不但节省磁盘空间，也没有幽灵依赖问题，安装速度还快，从机制上来说完胜 npm 和 yarn。

pnpm 就是凭借这个对 npm 和 yarn 降维打击的。

## 同一依赖多版本共存的问题
>
> <https://pnpm.io/zh/aliases>
可以使用 alias 别名

```shell
pnpm add lodash1@npm:lodash@1
pnpm add lodash2@npm:lodash@2
```

还可以和 hooks 结合使用, 将 pnpm 项目中所有 packages 下的 node_modules 中的 lodash 依赖替换为别名 awesome-lodash

```js
// .pnpmfile.cjs
function readPackage(pkg) {
  if (pkg.dependencies && pkg.dependencies.lodash) {
    pkg.dependencies.lodash = 'npm:awesome-lodash@^1.0.0'
  }
  return pkg
}

module.exports = {
  hooks: {
    readPackage
  }
}
```

## 如何消灭同依赖的多版本

yarn 有 resolutions 字段
pnpm 需要手动提升(<https://pnpm.io/zh/npmrc#public-hoist-pattern>)

## pnpm.overrides
>
> <https://juejin.cn/post/7145759868010364959#heading-28>
对指定的包进行版本覆盖

```json
{
  "pnpm": {
    "overrides": {
      "lodash": "4.17.21"
    }
  }
}
```

## package.json
>
> <https://pnpm.io/zh/package_json>

使用 engines 字段指定 pnpm 和 node 版本

```json
{
  "engines": {
    "node": ">=10",
    "pnpm": ">=3"
  }
}
```

## .npmrc
>
> pnpm 支持的 .npmrc 配置
> <https://pnpm.io/zh/npmrc>

```shell
# .npmrc
strict-peer-dependencies=false
auto-install-peers=true
always-auth=true
```

## pnpm-workspace.yaml
>
> <https://pnpm.io/zh/pnpm-workspace_yaml>
定义工作空间

## .pnpmfile.cjs
>
> <https://pnpm.io/zh/pnpmfile#%E9%92%A9%E5%AD%90>

pnpmfile 是一个配置文件，用于配置 pnpm 的行为。pnpmfile 是一个 CommonJS 模块，导出一个对象，对象的属性是钩子函数。

```js
module.exports = {
  hooks: {
    /* 在 pnpm 解析依赖项的包清单后调用 */
    readPackage: function (pkg) {
      // 修改 pkg
      return pkg
    },
    /* 在解析完依赖关系后调用 */
    afterAllResolved: function (lockfile, context) {
      // 修改 lockfile
      return lockfile
    },
  }
}
```

## 选型（为什么选择 pnpm）
>
> pnpm monorepo的技术选型临界点（Critical adoption）
> <https://blog.csdn.net/qq_21567385/article/details/121576328>

## 只允许 pnpm

{
  "scripts": {
    "preinstall": "npx only-allow pnpm"
  }
}

## peerDependencies 如何处理以及带来的问题
>
> peers 是如何被处理的
> <https://pnpm.io/zh/how-peers-are-resolved>
> 由 pnpm 处理 peerDependencies 的机制导致的 nestjs 依赖重复问题
> <https://juejin.cn/post/7147349974055911432>

如果一个 package 声明了 peerDependencies ，那么如果在不同的 workspace 下安装的 peerDependencies 不完全一致，就会导致有两份不同的 hash 被生成
