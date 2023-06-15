(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{478:function(t,e,o){"use strict";o.r(e);var _=o(45),s=Object(_.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("blockquote",[o("p",[t._v("https://tech.meituan.com/2017/04/27/vuex-code-analysis.html")])]),t._v(" "),o("p",[t._v("\\1. "),o("strong",[t._v("问")]),t._v("："),o("em",[t._v("使用Vuex只需执行 "),o("code",[t._v("Vue.use(Vuex)")]),t._v("，并在Vue的配置中传入一个store对象的示例，store是如何实现注入的？")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("答")]),t._v("："),o("code",[t._v("Vue.use(Vuex)")]),t._v(" 方法执行的是install方法，它实现了Vue实例对象的init方法封装和注入，使传入的store对象被设置到Vue上下文环境的$store中。因此在Vue Component任意地方都能够通过"),o("code",[t._v("this.$store")]),t._v("访问到该store。")])]),t._v(" "),o("p",[t._v("\\2. "),o("strong",[t._v("问")]),t._v("："),o("em",[t._v("state内部支持模块配置和模块嵌套，如何实现的？")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("答")]),t._v("：在store构造方法中有makeLocalContext方法，所有module都会有一个local context，根据配置时的path进行匹配。所以执行如"),o("code",[t._v("dispatch('submitOrder', payload)")]),t._v("这类action时，默认的拿到都是module的local state，如果要访问最外层或者是其他module的state，只能从rootState按照path路径逐步进行访问。")])]),t._v(" "),o("p",[t._v("\\3. "),o("strong",[t._v("问")]),t._v("："),o("em",[t._v("在执行dispatch触发action(commit同理)的时候，只需传入(type, payload)，action执行函数中第一个参数store从哪里获取的？")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("答")]),t._v("：store初始化时，所有配置的action和mutation以及getters均被封装过。在执行如"),o("code",[t._v("dispatch('submitOrder', payload)")]),t._v("的时候，actions中type为submitOrder的所有处理方法都是被封装后的，其第一个参数为当前的store对象，所以能够获取到 "),o("code",[t._v("{ dispatch, commit, state, rootState }")]),t._v(" 等数据。")])]),t._v(" "),o("p",[t._v("\\4. "),o("strong",[t._v("问")]),t._v("："),o("em",[t._v("Vuex如何区分state是外部直接修改，还是通过mutation方法修改的？")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("答")]),t._v("：Vuex中修改state的唯一渠道就是执行 "),o("code",[t._v("commit('xx', payload)")]),t._v(" 方法，其底层通过执行 "),o("code",[t._v("this._withCommit(fn)")]),t._v(" 设置_committing标志变量为true，然后才能修改state，修改完毕还需要还原_committing变量。外部修改虽然能够直接修改state，但是并没有修改_committing标志位，所以只要watch一下state，state change时判断是否_committing值为true，即可判断修改的合法性。")])]),t._v(" "),o("p",[t._v("\\5. "),o("strong",[t._v("问")]),t._v("："),o("em",[t._v("调试时的”时空穿梭”功能是如何实现的？")])]),t._v(" "),o("blockquote",[o("p",[o("strong",[t._v("答")]),t._v("：devtoolPlugin中提供了此功能。因为dev模式下所有的state change都会被记录下来，’时空穿梭’ 功能其实就是将当前的state替换为记录中某个时刻的state状态，利用 "),o("code",[t._v("store.replaceState(targetState)")]),t._v(" 方法将执行"),o("code",[t._v("this._vm.state = state")]),t._v(" 实现。")])])])}),[],!1,null,null,null);e.default=s.exports}}]);