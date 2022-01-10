(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{586:function(t,s,e){"use strict";e.r(s);var a=e(45),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"react-memo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-memo"}},[t._v("#")]),t._v(" React.memo()")]),t._v(" "),e("blockquote",[e("p",[t._v("https://zhuanlan.zhihu.com/p/94618828")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" MyComponent "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("memo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 使用 props 渲染 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("React.memo")]),t._v(" 为"),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/higher-order-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("高阶组件"),e("OutboundLink")],1),t._v("。它与 "),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/react-api.html#reactpurecomponent",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("React.PureComponent")]),e("OutboundLink")],1),t._v(" 非常相似，但只适用于函数组件，而不适用 class 组件")]),t._v(" "),e("p",[e("code",[t._v("React.memo")]),t._v(" 仅检查 props 变更。如果函数组件被 "),e("code",[t._v("React.memo")]),t._v(" 包裹，且其实现中拥有 "),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-state.html",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("useState")]),e("OutboundLink")],1),t._v(" 或 "),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/hooks-reference.html#usecontext",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("useContext")]),e("OutboundLink")],1),t._v(" 的 Hook，当 context 发生变化时，它仍会重新渲染")]),t._v(" "),e("p",[t._v("默认情况下其只会对复杂对象做浅层对比，如果你想要控制对比过程，那么请将自定义的比较函数通过第二个参数传入来实现。")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("props")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 使用 props 渲染 */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("areEqual")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("prevProps"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextProps")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  如果把 nextProps 传入 render 方法的返回结果与\n  将 prevProps 传入 render 方法的返回结果一致则返回 true，\n  否则返回 false\n  */")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" React"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("memo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyComponent"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" areEqual"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意"}},[t._v("#")]),t._v(" 注意")]),t._v(" "),e("p",[t._v("与 class 组件中 "),e("a",{attrs:{href:"https://zh-hans.reactjs.org/docs/react-component.html#shouldcomponentupdate",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("shouldComponentUpdate()")]),e("OutboundLink")],1),t._v(" 方法不同的是")]),t._v(" "),e("ul",[e("li",[t._v("如果 props 相等，"),e("code",[t._v("areEqual")]),t._v(" 会返回 "),e("code",[t._v("true")])]),t._v(" "),e("li",[t._v("如果 props 不相等，则返回 "),e("code",[t._v("false")])])]),t._v(" "),e("p",[t._v("这与 "),e("code",[t._v("shouldComponentUpdate")]),t._v(" 方法的返回值相反")])])}),[],!1,null,null,null);s.default=n.exports}}]);