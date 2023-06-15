(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{474:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"组件化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[t._v("#")]),t._v(" 组件化")]),t._v(" "),s("p",[t._v("Vue.js 另一个核心思想是组件化")]),t._v(" "),s("p",[t._v("所谓组件化，就是把页面拆分成多个组件 (component)，每个组件依赖的 CSS、JavaScript、模板、图片等资源放在一起开发和维护。组件是资源独立的，组件在系统内部可复用，组件和组件之间可以嵌套")]),t._v(" "),s("h3",{attrs:{id:"虚拟dom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#虚拟dom"}},[t._v("#")]),t._v(" 虚拟DOM")]),t._v(" "),s("p",[t._v("真正的 DOM 元素是非常庞大的，因为浏览器的标准就把 DOM 设计的非常复杂。当我们频繁的去做 DOM 更新，会产生一定的性能问题")]),t._v(" "),s("p",[t._v("而 Virtual DOM 就是用一个原生的 JS 对象去描述一个 DOM 节点，所以它比创建一个 DOM 的代价要小很多")]),t._v(" "),s("p",[t._v("在 Vue.js 中，Virtual DOM 是用 "),s("code",[t._v("VNode")]),t._v(" 这么一个 Class 去描述")]),t._v(" "),s("p",[t._v("实际上 Vue.js 中 Virtual DOM 是借鉴了一个开源库 "),s("a",{attrs:{href:"https://github.com/snabbdom/snabbdom",target:"_blank",rel:"noopener noreferrer"}},[t._v("snabbdom"),s("OutboundLink")],1),t._v(" 的实现，然后加入了一些 Vue.js 特色的东西")]),t._v(" "),s("p",[t._v("VNode 是对真实 DOM 的一种抽象描述，它的核心定义无非就几个关键属性，标签名、数据、子节点、键值等")]),t._v(" "),s("p",[t._v("Virtual DOM 除了它的数据结构的定义，映射到真实的 DOM 实际上要经历 VNode 的 create、diff、patch 等过程")]),t._v(" "),s("h3",{attrs:{id:"生命周期"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生命周期"}},[t._v("#")]),t._v(" 生命周期")]),t._v(" "),s("p",[t._v("每个 Vue 实例在被创建之前都要经过一系列的初始化过程。例如需要设置数据监听、编译模板、挂载实例到 DOM、在数据变化时更新 DOM 等")]),t._v(" "),s("p",[t._v("同时在这个过程中也会运行一些叫做生命周期钩子的函数，给予用户机会在一些特定的场景下添加他们自己的代码")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://github.com/YuArtian/yuartian.github.io/blob/book/.gitbook/assets/vuelifecycle.png?raw=true",alt:"生命周期"}})]),t._v(" "),s("h4",{attrs:{id:"beforecreate-created"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforecreate-created"}},[t._v("#")]),t._v(" beforeCreate & created")]),t._v(" "),s("p",[s("code",[t._v("beforeCreate")]),t._v(" 和 "),s("code",[t._v("created")]),t._v(" 函数都是在实例化 "),s("code",[t._v("Vue")]),t._v(" 的阶段，在 "),s("code",[t._v("_init")]),t._v(" 方法中执行的")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("_init")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initLifecycle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initEvents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initRender")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'beforeCreate'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initInjections")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve injections before data/props")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("initProvide")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// resolve provide after data/props")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("callHook")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'created'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("可以看到 "),s("code",[t._v("beforeCreate")]),t._v(" 和 "),s("code",[t._v("created")]),t._v(" 的钩子调用是在 "),s("code",[t._v("initState")]),t._v(" 的前后")]),t._v(" "),s("p",[s("code",[t._v("initState")]),t._v(" 的作用是初始化 "),s("code",[t._v("props")]),t._v("、"),s("code",[t._v("data")]),t._v("、"),s("code",[t._v("methods")]),t._v("、"),s("code",[t._v("watch")]),t._v("、"),s("code",[t._v("computed")]),t._v(" 等属性")]),t._v(" "),s("p",[t._v("显然 "),s("code",[t._v("beforeCreate")]),t._v(" 的钩子函数中就不能获取到 "),s("code",[t._v("props")]),t._v("、"),s("code",[t._v("data")]),t._v(" 中定义的值，也不能调用 "),s("code",[t._v("methods")]),t._v(" 中定义的函数")]),t._v(" "),s("p",[t._v("在这俩个钩子函数执行的时候，并没有渲染 DOM，所以我们也不能够访问 DOM，一般来说，如果组件在加载的时候需要和后端有交互，放在这俩个钩子函数执行都可以，如果是需要访问 "),s("code",[t._v("props")]),t._v("、"),s("code",[t._v("data")]),t._v(" 等数据的话，就需要使用 "),s("code",[t._v("created")]),t._v(" 钩子函数")]),t._v(" "),s("h4",{attrs:{id:"beforemount-mounted"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforemount-mounted"}},[t._v("#")]),t._v(" beforeMount & mounted")]),t._v(" "),s("p",[t._v("顾名思义，"),s("code",[t._v("beforeMount")]),t._v(" 钩子函数发生在 "),s("code",[t._v("mount")]),t._v("，也就是 DOM 挂载之前，它的调用时机是在 "),s("code",[t._v("mountComponent")]),t._v(" 函数中")]),t._v(" "),s("p",[t._v("在执行 "),s("code",[t._v("vm._render()")]),t._v(" 函数渲染 VNode 之前，执行了 "),s("code",[t._v("beforeMount")]),t._v(" 钩子函数，在执行完 "),s("code",[t._v("vm._update()")]),t._v(" 把 VNode patch 到真实 DOM 后，执行 "),s("code",[t._v("mounted")]),t._v(" 钩子")]),t._v(" "),s("p",[t._v("对于同步渲染的子组件而言，"),s("code",[t._v("mounted")]),t._v(" 钩子函数的执行顺序也是先子后父")]),t._v(" "),s("h4",{attrs:{id:"beforeupdate-updated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforeupdate-updated"}},[t._v("#")]),t._v(" beforeUpdate & updated")]),t._v(" "),s("p",[t._v("顾名思义，"),s("code",[t._v("beforeUpdate")]),t._v(" 和 "),s("code",[t._v("updated")]),t._v(" 的钩子函数执行时机都应该是在数据更新的时候")]),t._v(" "),s("p",[s("code",[t._v("beforeUpdate")]),t._v(" 的执行时机是在渲染 Watcher 的 "),s("code",[t._v("before")]),t._v(" 函数中")]),t._v(" "),s("p",[s("code",[t._v("update")]),t._v(" 的执行时机是在"),s("code",[t._v("flushSchedulerQueue")]),t._v(" 函数调用的时候")]),t._v(" "),s("h4",{attrs:{id:"beforedestroy-destroyed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#beforedestroy-destroyed"}},[t._v("#")]),t._v(" beforeDestroy & destroyed")]),t._v(" "),s("p",[s("code",[t._v("beforeDestroy")]),t._v(" 钩子函数的执行时机是在 "),s("code",[t._v("$destroy")]),t._v(" 函数执行最开始的地方，接着执行了一系列的销毁动作，包括从 "),s("code",[t._v("parent")]),t._v(" 的 "),s("code",[t._v("$children")]),t._v(" 中删掉自身，删除 "),s("code",[t._v("watcher")]),t._v("，当前渲染的 VNode 执行销毁钩子函数等，执行完毕后再调用 "),s("code",[t._v("destroy")]),t._v(" 钩子函数")]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("$destroy")]),t._v(" 的执行过程中，它又会执行 "),s("code",[t._v("vm.__patch__(vm._vnode, null)")]),t._v(" 触发它子组件的销毁钩子函数，这样一层层的递归调用")]),t._v(" "),s("p",[t._v("所以 "),s("code",[t._v("destroy")]),t._v(" 钩子函数执行顺序是先子后父，和 "),s("code",[t._v("mounted")]),t._v(" 过程一样")]),t._v(" "),s("h4",{attrs:{id:"activated-deactivated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#activated-deactivated"}},[t._v("#")]),t._v(" activated & deactivated")]),t._v(" "),s("p",[s("code",[t._v("activated")]),t._v(" 和 "),s("code",[t._v("deactivated")]),t._v(" 钩子函数是专门为 "),s("code",[t._v("keep-alive")]),t._v(" 组件定制的钩子")]),t._v(" "),s("h3",{attrs:{id:"组件注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件注册"}},[t._v("#")]),t._v(" 组件注册")]),t._v(" "),s("h4",{attrs:{id:"全局注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局注册"}},[t._v("#")]),t._v(" 全局注册")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'demo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("内部调用 Vue.extend 返回一个 vue 的经过扩展的子类")]),t._v(" "),s("p",[t._v("extend 方法实现继承，所以所有子类的 vue 实例组件都可以通过原型链找到注册的全局组件")]),t._v(" "),s("h4",{attrs:{id:"局部注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部注册"}},[t._v("#")]),t._v(" 局部注册")]),t._v(" "),s("p",[t._v("局部注册和全局注册不同的是，只有该类型的组件才可以访问局部注册的子组件，而全局注册是扩展到 "),s("code",[t._v("Vue.options")]),t._v(" 下")]),t._v(" "),s("p",[t._v("所以在所有组件创建的过程中，都会从全局的 "),s("code",[t._v("Vue.options.components")]),t._v(" 扩展到当前组件的 "),s("code",[t._v("vm.$options.components")]),t._v(" 下，这就是全局注册的组件能被任意使用的原因")]),t._v(" "),s("ul",[s("li",[t._v("注册全局组件，可以使用 "),s("code",[t._v("Vue.component(tagName, options)")])]),t._v(" "),s("li",[t._v("注册局部组件，在一个组件内部使用 "),s("code",[t._v("components")]),t._v(" 选项")])]),t._v(" "),s("h3",{attrs:{id:"异步组件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步组件"}},[t._v("#")]),t._v(" 异步组件")]),t._v(" "),s("p",[t._v("3中异步组件")]),t._v(" "),s("p",[t._v("普通函数异步组件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async-example'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个特殊的 require 语法告诉 webpack")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动将编译后的代码分割成不同的块，")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这些块将通过 Ajax 请求自动下载。")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./my-async-component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" resolve"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("Promise 异步组件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async-webpack-example'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该 `import` 函数返回一个 `Promise` 对象。")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./my-async-component'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("高级异步组件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("AsyncComp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 需要加载的组件。应当是一个 Promise")]),t._v("\n  component"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./MyComp.vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加载中应当渲染的组件")]),t._v("\n  loading"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" LoadingComp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 出错时渲染的组件")]),t._v("\n  error"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ErrorComp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染加载中组件前的等待时间。默认：200ms。")]),t._v("\n  delay"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 最长等待时间。超出此时间则渲染错误组件。默认：Infinity")]),t._v("\n  timeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async-example'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" AsyncComp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);