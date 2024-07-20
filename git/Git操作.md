# Git 的一些操作

## git rebase
>
>git doc
> <https://git-scm.com/docs/git-rebase/zh_HANS-CN>

git-rebase - 在另一个提交之上重新应用提交内容

### git rebase -i commitId

> <https://medium.com/starbugs/use-git-interactive-rebase-to-organize-commits-85e692b46dd>

使用之前可以用 `git log --oneline` 查看提交日志

用来整理合并 commit

在交互界面将 `pick` 改成 `squash` 表示当前 commit 和上一条合并

因为 rebase 最终会用到 push -f 提交所以应该现在本地 rebase 好之后再提交

如果 rebase 错了，只要 `git reset --hard ORIG_HEAD`

## 其他

- git add --patch (git add -p) 选择性的提交文件中的内容（未跟踪的文件不起作用）
-
