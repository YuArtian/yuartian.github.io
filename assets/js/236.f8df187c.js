(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{603:function(t,s,a){"use strict";a.r(s);var n=a(45),p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props"}},[t._v("#")]),t._v(" Props")]),t._v(" "),a("blockquote",[a("p",[t._v("https://zhuanlan.zhihu.com/p/53218851")])]),t._v(" "),a("p",[t._v("1、父组件 怎么传值给 子组件的 props")]),t._v(" "),a("p",[t._v("2、子组件如何读取props")]),t._v(" "),a("p",[t._v("3、父组件 data 更新，子组件的props 如何更新")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("test")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":childName")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("parentName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("父组件 div 中有 子组件 test，并传递 childName 属性")]),t._v(" "),a("h2",{attrs:{id:"props初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props初始化"}},[t._v("#")]),t._v(" props初始化")]),t._v(" "),a("p",[t._v("基本流程：")]),t._v(" "),a("ol",[a("li",[t._v("先执行父组件的创建过程，依次触发父组件beforeCreate，initState，created关键函数")]),t._v(" "),a("li",[t._v("父组件 initState 时，初始化data，props等（详见4.子组件过程）\n调用defineReactive完成父组件data响应式，proxy代理data到父组件vm实例上")]),t._v(" "),a("li",[t._v("之后，进入子组件创建过程，依次触发子组件beforeCreate，initState，created关键函数")]),t._v(" "),a("li",[t._v("子组件 initState 时，开始初始化子组件自身data，props")]),t._v(" "),a("li",[t._v("根据渲染函数 "),a("code",[t._v("{ attrs: { childName: parentVm.parentName } }")]),t._v("\n从父组件获取 parentVm.parentName 值")]),t._v(" "),a("li",[t._v("父组件解析到的 props，写入propsOptions中，子组件initProp中接受 propsOptions")]),t._v(" "),a("li",[t._v("子组件将 props 保存到 vm._props 上")]),t._v(" "),a("li",[t._v("for in循环 propsOptions：\n"),a("ol",[a("li",[t._v("缓存属性 key到 vm.$options._propKeys上，以便后续更新时使用")]),t._v(" "),a("li",[t._v("给每个属性（key）执行defineReactive，设置为响应式")]),t._v(" "),a("li",[t._v("将属性值代理到子组件 vm 实例上，方便开发时取props值")])])]),t._v(" "),a("li",[t._v("子组件props初始化完成")])]),t._v(" "),a("h4",{attrs:{id:"模板解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模板解析"}},[t._v("#")]),t._v(" 模板解析")]),t._v(" "),a("p",[t._v("模板解析过程中，要根据 AST 和 options 生成 render function（渲染函数）")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" state "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CodegenState")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ast "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("genSSRElement")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ast"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'_c(\"div\")'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      render"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"with(this){return "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      staticRenderFns"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("staticRenderFns\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意，这里使用了 with 来绑定作用域")]),t._v(" "),a("p",[t._v("所以，父组件被解析为")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("staticClass"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_c")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("attrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"child-name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("parentName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ol",[a("li",[a("p",[t._v("_c 是渲染组件的函数，_c('test') 表示渲染 test 这个子组件")])]),t._v(" "),a("li",[a("p",[t._v("因为 with 的作用是，绑定大括号内代码的 "),a("strong",[t._v("变量访问作用域")])])]),t._v(" "),a("li",[a("p",[t._v("这是一个匿名自执行函数，会在后面执行")])])]),t._v(" "),a("h4",{attrs:{id:"props-父传子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props-父传子"}},[t._v("#")]),t._v(" Props 父传子")]),t._v(" "),a("p",[t._v("之后，模板函数会被执行，执行时会绑定 "),a("strong",[t._v("父组件为作用域")])]),t._v(" "),a("p",[t._v("所以渲染函数内部所有的变量，"),a("strong",[t._v("都会从父组件对象 上去获取")])]),t._v(" "),a("p",[t._v("绑定了父作用域之后， parentName 自然会从父组件获取")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" childName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" parentVm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("parentName "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("渲染函数执行的时候，内部的 "),a("strong",[t._v("_c('test')")]),t._v(" 执行，然后传入了赋值后的 "),a("strong",[t._v("attrs")])]),t._v(" "),a("p",[t._v("父组件赋值之后的 attrs 就是下面这样")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" attrs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" childName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我是父组件"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("此时，父组件就正式 利用 props 把 parentName 传给了子组件的props childName")]),t._v(" "),a("h4",{attrs:{id:"子组件保存props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#子组件保存props"}},[t._v("#")]),t._v(" 子组件保存props")]),t._v(" "),a("p",[t._v("props 会被保存到子组件实例的 "),a("strong",[t._v("_props")]),t._v(" 中")]),t._v(" "),a("p",[t._v("并且会逐一复制到子组件实例上，并且对每一个属性调用 defineReactive，设置为 "),a("strong",[t._v("响应式")]),t._v(" 的")]),t._v(" "),a("p",[t._v("之后再 调用 proxy 方法，进行 "),a("strong",[t._v("访问转接")]),t._v(" 和 "),a("strong",[t._v("赋值转接")])]),t._v(" "),a("h2",{attrs:{id:"props取值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props取值"}},[t._v("#")]),t._v(" props取值")]),t._v(" "),a("p",[t._v("组件 props初始化 的时候，会把 props 逐一复制到 "),a("strong",[t._v("vm对象")]),t._v("上（子组件的实例 this） 上")]),t._v(" "),a("p",[t._v("取值的时候，会触发之前被 proxy 方法设置的 get，代理到 this._props 上")]),t._v(" "),a("h2",{attrs:{id:"props更新"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#props更新"}},[t._v("#")]),t._v(" props更新")]),t._v(" "),a("p",[t._v("props的更新，正常流程要通过父组件的 data 的变化，触发 set代理")]),t._v(" "),a("p",[t._v("从而触发父组件 watcher 的重新渲染，对 props 重新赋值")]),t._v(" "),a("p",[t._v("并不建议，在子组件中直接修改 props，Vue框架会给出警告，但是子组件 props 的值还是可以更新的")]),t._v(" "),a("p",[t._v("但不影响 父组件中 data 的值，因为子组件的 props 被重新赋值了")])])}),[],!1,null,null,null);s.default=p.exports}}]);