# Gitlab

> gitlab 文档中心
> <https://docs.gitlab.cn/jh/index.html>

## Q&A

### gitlab.yml 中，在 develop 上设置了流水线，但是一个 Develop 的角色 push 到 develop 分支后，流水线没有触发，可能是什么原因？

1. 检查 `.gitlab-ci.yml`
   `rules` 中的条件是否满足 或者 `only` 和 `except` 是否设置正确
2. 检查 develop 分支是否设置了保护
   > 受保护的分支
   > <https://docs.gitlab.cn/jh/user/project/protected_branches.html>
   可以更改 保护分支 的设置，允许开发者 push
   > 允许所有人直接推送到受保护的分支
   > <https://docs.gitlab.cn/jh/user/project/protected_branches.html#%E5%85%81%E8%AE%B8%E6%89%80%E6%9C%89%E4%BA%BA%E7%9B%B4%E6%8E%A5%E6%8E%A8%E9%80%81%E5%88%B0%E5%8F%97%E4%BF%9D%E6%8A%A4%E7%9A%84%E5%88%86%E6%94%AF>
   也可以设置需要通过合并请求，需要 CODEOWNER 批准才能 push
   > 要求受保护分支的代码所有者批准 专业版
   > <https://docs.gitlab.cn/jh/user/project/protected_branches.html#%E8%A6%81%E6%B1%82%E5%8F%97%E4%BF%9D%E6%8A%A4%E5%88%86%E6%94%AF%E7%9A%84%E4%BB%A3%E7%A0%81%E6%89%80%E6%9C%89%E8%80%85%E6%89%B9%E5%87%86-premium-all>
   任何未在 CODEOWNERS 文件中指定的用户都不能推送指定文件或路径的更改

### gitlab.yml 中，如何利用 pnpm-lock.yaml 文件做缓存？

```yaml
cache:
  key: ${CI_COMMIT_REF_SLUG}
  paths:
    - node_modules/
    - pnpm-lock.yaml
```

```yaml
stages:
  - build

build:
  stage: build
  image: node:18.17.1
  before_script:
    - corepack enable
    - corepack prepare pnpm@latest-9 --activate
    - pnpm config set store-dir .pnpm-store
  script:
    - pnpm install # install dependencies
  cache:
    key:
      files:
        - pnpm-lock.yaml
    paths:
      - .pnpm-store
```

### CI_COMMIT_REF_SLUG 和 CI_COMMIT_REF_NAME 有什么区别？

- CI_COMMIT_REF_SLUG
  分支名，将特殊字符替换为 `-`
- CI_COMMIT_REF_NAME
  分支名，原始值

### cache 如何使用？
>
> cache
> <https://docs.gitlab.cn/jh/ci/yaml/#cache>

使用 cache 指定 jobs 之间缓存的文件和目录，以加快构建速度

- cache 可以在流水线和作业之间共享
- 默认情况下，不在受保护和未受保护的分支之间共享
- 在产物之前恢复
- 限制为最多四个不同的缓存

#### 使用

- cache:paths: 关键字来选择要缓存的文件或目录
- cache:key: 为每个缓存提供唯一的标识键
  - 使用相同缓存键的所有作业都使用相同的缓存，包括在不同的流水线中
