(window.webpackJsonp=window.webpackJsonp||[]).push([[225],{589:function(e,t,v){"use strict";v.r(t);var _=v(45),c=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"react组件的渲染流程是什么"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#react组件的渲染流程是什么"}},[e._v("#")]),e._v(" React组件的渲染流程是什么")]),e._v(" "),v("blockquote",[v("p",[e._v("https://juejin.im/post/5cb66fdaf265da0384128445#heading-14")])]),e._v(" "),v("ul",[v("li",[e._v("使用"),v("code",[e._v("React.createElement")]),e._v("或"),v("code",[e._v("JSX")]),e._v("编写"),v("code",[e._v("React")]),e._v("组件，实际上所有的"),v("code",[e._v("JSX")]),e._v("代码最后都会转换成"),v("code",[e._v("React.createElement(...)")]),e._v("，"),v("code",[e._v("Babel")]),e._v("帮助我们完成了这个转换的过程")]),e._v(" "),v("li",[v("code",[e._v("createElement")]),e._v("函数对"),v("code",[e._v("key")]),e._v("和"),v("code",[e._v("ref")]),e._v("等特殊的"),v("code",[e._v("props")]),e._v("进行处理，并获取"),v("code",[e._v("defaultProps")]),e._v("对默认"),v("code",[e._v("props")]),e._v("进行赋值，并且对传入的孩子节点进行处理，最终构造成一个"),v("code",[e._v("ReactElement")]),e._v("对象（所谓的虚拟"),v("code",[e._v("DOM")]),e._v("）")]),e._v(" "),v("li",[v("code",[e._v("ReactDOM.render")]),e._v("将生成好的虚拟"),v("code",[e._v("DOM")]),e._v("渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实"),v("code",[e._v("DOM")])])])])}),[],!1,null,null,null);t.default=c.exports}}]);