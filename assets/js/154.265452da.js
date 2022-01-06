(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{522:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"iphonex适配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iphonex适配"}},[t._v("#")]),t._v(" IPhoneX适配")]),t._v(" "),a("blockquote",[a("p",[t._v("https://aotu.io/notes/2017/11/27/iphonex/index.html")]),t._v(" "),a("p",[t._v("https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/")]),t._v(" "),a("p",[t._v("https://webkit.org/blog/7929/designing-websites-for-iphone-x/?hmsr=funteas.com&utm_medium=funteas.com&utm_source=funteas.com")])]),t._v(" "),a("p",[t._v("如何解决 IPhone 刘海屏，底部黑条，圆角的问题")]),t._v(" "),a("h2",{attrs:{id:"安全区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全区域"}},[t._v("#")]),t._v(" 安全区域")]),t._v(" "),a("p",[t._v("安全区域 指的是一个可视窗口范围，处于安全区域的内容不受圆角（corners）、齐刘海（sensor housing）、小黑条（Home Indicator）影响")]),t._v(" "),a("h3",{attrs:{id:"env-和-constant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env-和-constant"}},[t._v("#")]),t._v(" env() 和 constant()")]),t._v(" "),a("p",[t._v("iOS11 新增特性，Webkit 的一个 CSS 函数，用于设定安全区域与边界的距离，有四个预定义的变量：")]),t._v(" "),a("ul",[a("li",[t._v("safe-area-inset-left：安全区域距离左边边界距离")]),t._v(" "),a("li",[t._v("safe-area-inset-right：安全区域距离右边边界距离")]),t._v(" "),a("li",[t._v("safe-area-inset-top：安全区域距离顶部边界距离")]),t._v(" "),a("li",[t._v("safe-area-inset-bottom：安全区域距离底部边界距离")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 兼容 iOS < 11.2 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 兼容 iOS >= 11.2 */")]),t._v("\n")])])]),a("img",{attrs:{src:"https://webkit.org/wp-content/uploads/safe-areas-1.png"}}),t._v(" "),a("h2",{attrs:{id:"viewport-fit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewport-fit"}},[t._v("#")]),t._v(" viewport-fit")]),t._v(" "),a("blockquote",[a("p",[t._v("https://www.w3.org/TR/css-round-display-1/#viewport-fit-descriptor")]),t._v(" "),a("p",[t._v("注意：网页默认不添加扩展的表现是 viewport-fit=contain，需要适配 iPhoneX 必须设置 viewport-fit=cover，这是适配的关键步骤")])]),t._v(" "),a("p",[t._v("iOS11 新增特性，苹果公司为了适配 iPhoneX 对现有 viewport meta 标签的一个扩展，用于设置网页在可视窗口的布局方式，可设置三个值：")]),t._v(" "),a("ul",[a("li",[t._v("contain: 可视窗口完全包含网页内容（左图）")]),t._v(" "),a("li",[t._v("cover：网页内容完全覆盖可视窗口（右图）")]),t._v(" "),a("li",[t._v("auto：默认值，跟 contain 表现一致")])]),t._v(" "),a("p",[t._v("新增 viweport-fit 属性，使得页面内容完全覆盖整个窗口")]),t._v(" "),a("p",[a("code",[t._v('<meta name="viewport" content="width=device-width, viewport-fit=cover">')])]),t._v(" "),a("img",{attrs:{src:"https://misc.aotu.io/liqinuo/iphonex_1.png"}}),t._v(" "),a("h2",{attrs:{id:"隔离兼容样式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔离兼容样式"}},[t._v("#")]),t._v(" 隔离兼容样式")]),t._v(" "),a("p",[t._v("如果我们只希望 iPhoneX 才需要新增适配样式，我们可以配合 @supports 来隔离兼容样式，当然这个处理对页面展示实际不会有任何影响")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@supports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constant")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("safe-area-inset-bottom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);