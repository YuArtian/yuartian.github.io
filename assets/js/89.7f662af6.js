(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{450:function(t,e,s){"use strict";s.r(e);var o=s(45),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"哪些声明周期中可以使用setstate方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#哪些声明周期中可以使用setstate方法"}},[t._v("#")]),t._v(" 哪些声明周期中可以使用setState方法")]),t._v(" "),s("p",[t._v("componentDidMount：是最常用来 setState 的生命周期，可以在组件挂载之后的异步请求中触发 setState，将异步的结果更新到 state 中。但是，会触发两次 render")]),t._v(" "),s("p",[t._v("UNSAFE_componentWillMount：在这里 setState 虽然不会报错但是并没有意义，推荐写在 constructor 中")]),t._v(" "),s("p",[t._v("static getDerivedStateFromProps：并没有 this，所以不能 setState")]),t._v(" "),s("p",[t._v("UNSAFE_componentWillReceiveProps：可以 setState，但是这个生命周期只能在 props 变化时调用")]),t._v(" "),s("p",[t._v("shouldComponentUpdate、UNSAFE_componentWillUpdate、getSnapshotBeforeUpdate、componentDidUpdate：这些生命周期中调用 setState 会造成死循环，尤其是 shouldComponentUpdate 中，即使返回了 false。")]),t._v(" "),s("p",[t._v("原因是 setState 调用之后，会再次进入这些生命周期中，之后，这些生命周期中又会调用 setState。。。")]),t._v(" "),s("p",[t._v("所以，基本上只有在 componentDidMount 中调用 setState 才有实际的意义")])])}),[],!1,null,null,null);e.default=n.exports}}]);