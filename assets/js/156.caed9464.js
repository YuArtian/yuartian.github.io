(window.webpackJsonp=window.webpackJsonp||[]).push([[156],{520:function(t,n,a){"use strict";a.r(n);var e=a(45),i=Object(e.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"a标签能不能包含div"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a标签能不能包含div"}},[t._v("#")]),t._v(" a标签能不能包含div")]),t._v(" "),a("blockquote",[a("p",[t._v("https://juejin.im/post/5a2f2cb36fb9a0450b665899")])]),t._v(" "),a("p",[t._v("因此 a标签内是否合可以包含div标签要看其父元素的 content model 和其内容的 categories")]),t._v(" "),a("p",[t._v("比如我们要看 p > ins > a > div 是否合法，过程是这样的：")]),t._v(" "),a("ul",[a("li",[t._v("p 元素的 content model 是 phrasing content，ins 本身属于 phrasing content 故可以嵌套")]),t._v(" "),a("li",[t._v("ins 元素的 content model 是 transparent，故在此时里面是否能有 a 需检查 p > a 的合法性")]),t._v(" "),a("li",[t._v("a 元素也属于 phrasing content，故 p > ins > a 合法")]),t._v(" "),a("li",[t._v("a 元素的 content model 也是 transparent，故此时里面包含 div 的合法性向上传递，检查 ins > div 又向上传递，变成检查 p > div")]),t._v(" "),a("li",[t._v("div 不属于 phrasing content，所以这个嵌套是不合法的")])])])}),[],!1,null,null,null);n.default=i.exports}}]);