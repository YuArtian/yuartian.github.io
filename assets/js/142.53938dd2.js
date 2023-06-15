(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{506:function(t,i,e){"use strict";e.r(i);var n=e(45),r=Object(n.a)({},(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"分环境为-git-指定单独的配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分环境为-git-指定单独的配置"}},[t._v("#")]),t._v(" 分环境为 Git 指定单独的配置")]),t._v(" "),e("blockquote",[e("p",[t._v("https://www.boris1993.com/tools/git/specify-different-git-config-for-different-environments.html")])]),t._v(" "),e("p",[t._v("在 2.13 这个版本中，Git 引入了一个名为 “按条件引入”(Conditional includes) 的功能\n这个功能允许用户通过指定一定的条件，来使 Git 从不同的配置文件中取得配置项")]),t._v(" "),e("h2",{attrs:{id:"includeif"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#includeif"}},[t._v("#")]),t._v(" includeIf")]),t._v(" "),e("p",[t._v("在 ~ 目录下找到 git 的全局配置文件 .gitconfig\n增加 includeIf 配置")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[core]\n  excludesfile = ~/.gitignore_global\n  editor = vim\n[includeIf "gitdir:~/projects/work/"]\n  path = ~/.config/git/gitconfig-work\n[includeIf "gitdir:~/projects/personal/"]\n  path = ~/.config/git/gitconfig-personal\n\n')])])]),e("h2",{attrs:{id:"检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#检查"}},[t._v("#")]),t._v(" 检查")]),t._v(" "),e("p",[t._v("不要忘记检查配置是否生效\n"),e("code",[t._v("git config -l")])])])}),[],!1,null,null,null);i.default=r.exports}}]);