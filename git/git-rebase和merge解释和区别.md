# git-rebase和merge解释和区别
>
> git rebase详解（图解+最简单示例，一次就懂）
> <https://blog.csdn.net/weixin_42310154/article/details/119004977>
> Git 基本命令 merge 和 rebase，你真的了解吗？
> <https://www.cnblogs.com/michael-xiang/p/13179837.html>

## git rebase

当执行rebase操作时，git会从两个分支的共同祖先开始提取待变基分支上的修改，然后将待变基分支指向基分支的最新提交，最后将刚才提取的修改应用到基分支的最新提交的后面

通俗解释（重要！！）：rebase，变基，可以直接理解为改变基底。feature分支是基于master分支的B拉出来的分支，feature的基底是B。而master在B之后有新的提交，就相当于此时要用master上新的提交来作为feature分支的新基底。实际操作为把B之后feature的提交先暂存下来，然后删掉原来这些提交，再找到master的最新提交位置，把存下来的提交再接上去（接上去是逐个和新基底处理冲突的过程），如此feature分支的基底就相当于变成了M而不是原来的B了。

（注意，如果master上在B以后没有新提交，那么就还是用原来的B作为基，rebase操作相当于无效，此时和git merge就基本没区别了，差异只在于git merge会多一条记录Merge操作的提交记录）

rebase的优点：

1. 使提交历史更加整洁，不会出现合并分支的记录
2. 可以减少合并冲突，因为rebase操作是逐个处理冲突的，而merge是一次性处理
3. 可以更好的追踪bug，因为提交历史更加整洁，更容易定位问题

rebase的缺点：

1. 会改变提交历史，如果多人协作，不建议使用rebase，因为会改变提交历史，会导致其他人的提交历史混乱
2. 会产生冲突，虽然rebase可以减少冲突，但是不代表不会有冲突，如果有冲突，需要逐个处理
3. 会丢失merge信息，因为rebase操作会把分支的提交历史整理成一条直线，不会有合并分支的记录

rebase的使用场景：

1. 个人分支，不涉及多人协作，可以使用rebase
2. 保持提交历史整洁，可以使用rebase

## git merge

merge 命令：
fast-forward 默认
no-ff 强制创建新的合并提交
squash 将合并结果压缩为一个提交，并且不会保留源分支的提交历史
