# Monorepo
>
> All in one：项目级 monorepo 策略最佳实践
> <https://segmentfault.com/a/1190000039157365>
> 《得物前端monorepo技术架构与实践》得物前端平台客服前端负责人毛远俊|D2 2023|阿里巴巴终端技术
> <https://www.bilibili.com/video/BV16K411t7Sf/?spm_id_from=333.337.search-card.all.click&vd_source=825473bb0b044dbfeca73fca932e0c5b>
> <https://tech.dewu.com/article?id=94>
> <https://www.sgpjbg.com/baogao/155682.html>

## 什么是 Monorepo

单一仓库, Monorepo 是一种用一个仓库管理应用代码的代码组织模式。与之相对的就是 MultiRepo 多仓模式
但是 Monorepo 并不是简单的将不同应用的代码放到一个仓库的不同文件夹中, 而是与之相关的一整套技术应用

## 背景

- 业务扩张
   承接的项目越来越多，项目之间的依赖关系越来越复杂
- 代码复用难
   不同项目间有重复的业务代码，难以复用
- 基础能力升级难
   通用的 npm 组件包依赖，升级进度难以掌控
- 构建问题
   不同应用之间，构建工具不一致，构建流程不一致，维护成本高，出现问题难以排查
- 协作效率低下

## 调研&选型

- Google（Piper + Citc）
- Meta（VSCODE + Mercurial）

## 规模和成效

- 业务应用 20+个
- 代码量 200多w行代码
- 物理空间占用 200mb

统一研发构建流程，提升协作效率
更好的代码复用，提升编码效率

## 优点

将各自独立的项目变成一个统一的工程整体，提升研发效率和工程质量

- 代码重用将变得非常容易:
  - 由于所有的项目代码都集中于一个代码仓库，我们将很容易抽离出各个项目共用的业务组件或工具
  - 对于相同的业务逻辑也可以复用, 从项目积攒的经验依赖于项目，没有提炼出来，无法快速复用
- 依赖管理将变得非常简单:
  - 统一包管理器
  - 依赖升级新版本，统一升级
  - 可以检索所有的使用方
- 对整体项目的管理将变得非常简单
- 代码重构将变得非常容易
- 开放，透明，共享的组织文化，这有利于开发者成长，代码质量的提升

## 难点

1. 代码库庞大，拉取代码的时间变长，或者有很多其他业务的代码是不需要关心的
   - **稀疏检出**：使用 git sparse-checkout（拉取远程仓库时只拉取部分文件，而不是整个仓库）
   > <https://git-scm.com/docs/git-sparse-checkout#_examples>

      ```shell
      git sparse-checkout init
      git sparse-checkout set <dir>
      git sparse-checkout add <dir></dir>
      ```

      会生成一个 .git/info/sparse-checkout 文件，记录了需要拉取的文件
      可以将目录选择功能做成 cli 工具
   <!-- - git shallow clone 来解决 -->

2. 项目粒度的权限管理变得非常复杂
   - 权限角色约束，对应 gitlab 的角色
   > <https://gist.github.com/AgoniNemo/ebbb33e757e8261f2531c90e28ea71c3#1-%E5%B7%A5%E7%A8%8B%E6%9D%83%E9%99%90>
       - Owner
       - Maintainer
       - Developer
   - 可以使用 codeowners 文件来管理
      对于某个文件夹，可以指定相关负责人来 review
   - 分支保护
      > <https://docs.gitlab.cn/jh/user/project/protected_branches.html>
     master，release-*，hotfix 研发本地无法直接提交代码，需要通过 MR 来提交

3. feature 分支过多，如何让代码/需求不冲突
   - 命名规范
     保证应用名是唯一的，搭配各个特性分支名和版本号的前缀，如 `feature-[应用标识]-[版本号]`
   - 严谨的 MR/CR 流程
      提交的时候，feature 的代码可能超过 release 代码，可能会带上跟本次修改无关的代码
      codeowners 机制保证了不在本次需求的代码改动时，需要 CR 通过才能上线
   - 以应用的维度发布，各个应用发布互不影响
   - 使用 git rebase 保证提交信息的整洁
   <!-- - 可以使用 git rebase 来解决
   - （主干开发，减少分支的数量）
   - 规范 git flow
   - 规范 git commit message -->
4. 组件和库源码依赖之后，如何保证代码质量
   - 单元测试
     - 组件和库的单元测试覆盖率要求
     - 在 pre-publish 阶段，要求单元测试通过
   <!-- 没有时间写测试用例怎么办 -->
   使用 AI 工具，辅助生成测试用例
   - 完善的文档

5. 模块过多的时候，各个模块的版本不好维护
   - 使用 changesets 来管理版本

## 取舍

Monorepo 适合中大型项目，对于小型项目，MultiRepo 更适合
Monorepo 适合团队协作紧密的项目，而且对公司的基础建设要求较高
需要团队成员培养 code review 习惯，需要团队成员培养测试驱动开发的习惯，要保证测试用例的覆盖率

可以不用做到公司级别的 Monorepo，可以先做到项目级别的 Monorepo 也是有很多好处的

## 迁移

如何快速迁移，保证迁移过程中不影响业务开发

- 完善的迁移文档
- yarn/npm 迁移到 pnpm
  - auto-install-peers=true
  - npm 可以直接使用 package-lock.json `pnpm install --from=npm`
  - 使用 `yarn.lock` 文件 配合 `pnpm install --from=yarn`
  - 版本
- 冗余文件删除
- 构建命令修改

如何确保生产环境不出问题

- 充分的研发自测（配合之前的测试用例）+ 逐步迁移
- 同步测试，做全量回归
- 灰度环境
- 快速回滚
